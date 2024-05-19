const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    id: Number,
    name: String,
    instructor: String,
    description: String,
    enrollmentStatus: String,
    thumbnail: String,
    duration: String,
    schedule: String,
    location: String,
    prerequisites: Array,
    syllabus: [{
        week: Number,
        topic: String,
        content: String
    }]
})

const courseModel = new mongoose.model('course', Schema);
module.exports = courseModel;