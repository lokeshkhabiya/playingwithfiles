const mongoose = require("mongoose");

const conversionSchema = new mongoose.Schema({
    originalFilename: {
        type: String,
        required: true,
    },
    originalFilePath: {
        type: String,
        required: true,
    },
    convertedFilename: {
        type: String
    },
    convertedFilePath: {
        type: String
    },
    conversionStatus: {
        type: String,
        required: true,
        default: 'pending',
    },
    convertedFormat: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Converison', conversionSchema);