
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    date: { type: Date, required: true },
    time: String,
    location: String,
    capacity: { type: Number, required: true },
    registrationDeadline: Date,
    // Add more fields as needed
});

module.exports = mongoose.model('Event', eventSchema);
