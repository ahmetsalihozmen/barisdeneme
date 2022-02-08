const mongoose = require('mongoose')

const classifiedSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    userId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    publishedBy: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    point: {
        type: Number,
        required: true,
        default: 1400
    },
    classifiedAttributes: [{
        id: {
            type: Number,
            required: true
        },
        classifiedId: {
            type: Number,
            required: true
        },
        attributeName: {
            type: String,
            required: true
        },
        attributeValue: {
            type: String,
            required: true
        }
    }]
})

module.exports = mongoose.models.Classified || mongoose.model("Classified", classifiedSchema);