
const express = require('express');
const { getUserDetails } = require('../controllers/user');
const router = express.Router();
router.get('/details', getUserDetails);
module.exports = router;
