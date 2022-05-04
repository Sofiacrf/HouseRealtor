const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// Get /feed/catalogue
router.get('/catalogo', feedController.getCatalogues);

// Get catalogue by ID
router.get('/catalogue/:catalogueId', feedController.getCatalogue);

module.exports = router;