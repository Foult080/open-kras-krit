const mongoose = require('mongoose');
const TeamsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    capt: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    team: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        status: {
            type: String,
            default: 'teammate'
        }
    }],
    link: {
        type: String
    }
    
});


module.exports = Teams = mongoose.model('teams', TeamsSchema);