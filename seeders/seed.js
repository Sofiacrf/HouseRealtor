const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/catalogue', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
