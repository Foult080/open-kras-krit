const mongoose = require('mongoose');
const TestSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answers: [{
        vars: {
            type: String,
            required: true
        },
        answer: {
            type: Boolean
        }
    }]
});

module.exports = Test = mongoose.model('test', TestSchema);