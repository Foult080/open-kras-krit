const mongoose = require("mongoose");
const TeamsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hackaton: [{
    hack: {
      type: Object
    },
    teamCase: {
      type: Object
    },
    link: {
      type: String
    }
  }],
  capt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  team: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      name: {
        type: String
      },
      email: {
        type: String
      },
      status: {
        type: String,
        default: "teammate",
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Teams = mongoose.model("teams", TeamsSchema);
