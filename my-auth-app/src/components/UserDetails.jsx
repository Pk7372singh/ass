import { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/details",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data); // Ensure response.data has the user info
        setLoading(false);
      } catch (err) {
        setError(
          err.response
            ? err.response.data.message
            : "Error fetching user details"
        );
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>User Details</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>{" "}
      {/* Make sure to use _id instead of id */}
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default UserDetails;
