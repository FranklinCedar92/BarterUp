const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const recommendationsSchema = require('./Recommendations');

const listingSchema = new Schema(
    {
        // photo, description, username, createdAt, Recommendations
        Photo: {
            type: String
        },
        description: {
            type: String,
            required: 'please enter a description',
            minlength: 50,
            maxlength: 350
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        recommendations: [recommendationsSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

listingSchema.virtual('recommendationCount').get(function() {
    return this.recommendations.length;
});

const Listing = model('Listing', listingSchema);

module.exports = Listing;