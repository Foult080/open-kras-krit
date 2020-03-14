const mongoose = require('mongoose');
const ApplicantSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    },
    tel: {
        type: String,
        required:true
    },
    proff: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'spec'
    }],
    ball: {
        type: String
    }
});

module.exports = Applicant = mongoose.model('applicant', ApplicantSchema);