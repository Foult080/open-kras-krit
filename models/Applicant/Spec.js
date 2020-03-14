const mongoose = require('mongoose');
const SpecSchema = new mongoose.Schema({
    num: {
        type: String,
        required: true
    },
    spec: {
        type:String,
        required: true
    },
    branch: {
        type: String,
    },
    base: {
        type: String
    }
});

module.exports = Spec = mongoose.model('spec', SpecSchema);