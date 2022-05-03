const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/catalogue', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const catalogueSeed = [
  {
    catalogue: [
      {
        title: 'Cabaña en Puerto Escondido',
        imageUrl: '--',
        description: 'Best cabain in Puerto Escondido, right in front of the beach',
        price: 125000000,
      }
    ]
  },
  {
    catalogue: [
      {
        title: 'Cabaña en Ajusco',
        imageUrl: '--',
        description: 'Best cabain in a secret spot near Ajusco in Mexico City',
        price: 15000000,
      }
    ]
  },
  {
    catalogue: [
      {
        title: 'Cabaña en Playa del Carmen',
        imageUrl: '--',
        description: 'Most luxury place in Playa del Carmen',
        price: 180000000,
      }
    ]
  },
];

db.Catalogue.deleteMany({})
.then(() => db.Catalogue.collection.insertMany(catalogueSeed))
.then((data) => {
  console.log(data.results.n + ' records inserted!');
  process.exit(0);
})
.catch((err) => {
  console.error(err);
  process.exit(1);
});
