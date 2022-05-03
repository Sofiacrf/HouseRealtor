const fs = require('fs');
const path = require('path');

const Catalogue = require('../models/catalogue');

exports.getCatalogues = (req, res, next) => {
    const currentPage = req.query.page || 1;
    const perPage = 2;
    let totalItems;
    Catalogue.find()
      .countDocuments()
      .then(count => {
        totalItems = count;
        return Catalogue.find()
          .skip((currentPage - 1) * perPage)
          .limit(perPage);
      })
      .then(catalogues => {
        res.status(200).json({
          message: 'Fetched catalogues successfully.',
          catalogues: catalogues,
          totalItems: totalItems
        });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
}

// Get catalogues by ID
exports.getCatalogue = (req, res, next) => {
    const catalogueId = req.params.catalogueId;
    Post.findById(catalogueId)
      .then(catalogue => {
        if (!catalogue) {
          const error = new Error('Could not find catalogue.');
          error.statusCode = 404;
          throw error;
        }
        res.status(200).json({ message: 'Catalogue fetched.', catalogue: catalogue });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  };