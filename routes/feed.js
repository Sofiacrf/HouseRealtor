const express = require('express');

const router = express.Router();

// Get /feed/catalogue
router.get('/catalogue')

// Get catalogue by ID
router.get('/catalogue/:catalogueId')

module.exports = router;