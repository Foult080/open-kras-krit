const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    tel: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
    },
    spec: {
        type: String,
    },
    skills: {
        type: [String],
        required: true
    },
    github: {
        type: String
    },
    experience: [{
        title: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        from: {
            type: Date
        },
        to: {
            type: Date
        },
        current: {
            type: Boolean,
            default: false
        }
    }],
    pubEvents: [{
        title: {
            type:String,
            required: true
        },
        desc: {
            type: String,
        },
        place: {
            type: String
        }
    }],
    profEvents: [{
        title: {
            type:String,
            required: true
        },
        desc: {
            type: String,
        },
        place: {
            type: String
        }
    }]
});


module.exports = Profile = mongoose.model('profiles', ProfileSchema);