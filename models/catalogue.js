const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catalogueSchema = new Schema({
    catalogue: [
        {
            title: {
                type: String,
                required: true
            },
            imageUrl: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            price :
            {
                type: Number,
            },
        },
    ],
});

const Catalogue = mongoose.model('Catalogue', catalogueSchema);

module.exports = Catalogue;