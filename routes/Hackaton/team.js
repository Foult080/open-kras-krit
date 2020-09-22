const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Teams = require("../../models/Hackaton/Teams");
const User = require("../../models/User");

//@route POST api/hack
//@desc create team
router.post(
  "/",
  auth,
  [check("name", "Укажите название команды").not().isEmpty()],
  async (req, res) => {
    //valid data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const teamFields = {};
    teamFields.name = req.body.name;
    teamFields.capt = req.user.id;
    try {
      //check team exists
      let team = await Teams.findOne({
        capt: req.user.id,
      });
      //if exist update
      if (team) {
        team = await Teams.findOneAndUpdate(
          { capt: req.user.id },
          { $set: teamFields },
          { new: true, upsert: true }
        );
        return res.json(team);
      }
      //create new team
      team = new Teams(teamFields);
      await team.save();
      res.json(team);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Ошибка сервера");
    }
  }
);

//@route PUT /api/hack/team/add
//desc add new teammate
router.put(
  "/add",
  auth,
  [check("email", "Укажите email участника")],
  async (req, res) => {
    //valid data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        msg: "Пользователь не зарегистрирован",
      });
    }
    try {
      const userTeam = await Teams.findOne({ team: { _id: user._id } });
      if (userTeam) {
        return res
          .status(400)
          .json({ msg: "Пользователь уже зарегистрирован в команде" });
      } else {
        const teams = await Teams.findOne({ capt: req.user.id });
        teams.team.unshift(user);
        await teams.save();
        res.json(teams);
      }
      res.json(userTeam);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Ошибка сервера");
    }
  }
);

router.get("/me", auth, async (req, res) => {
  try {
    let team = await Teams.findOne({ capt: req.user.id });
    if (!team) {
      let team = await Teams.findOne({ team: { _id: req.user.id } });
      if (team) res.json(team);
      else return res.status(400).json({ msg: "Команда отсутсвует" });
    } 
    res.json(team);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ошибка сервера");
  }
});

module.exports = router;
