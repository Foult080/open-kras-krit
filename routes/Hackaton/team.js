const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Teams = require("../../models/Hackaton/Teams");
const User = require("../../models/User");
const Hack = require("../../models/Hackaton/Hack");

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
    const { name, hack, case_id, link } = req.body;
    const capt = await User.findById(req.user.id);
    let team = {
      user: capt,
      name: capt.name,
      email: capt.email,
      status: "captain",
    };
    const teamFields = { name, capt: capt.id, team, link };
    const hackaton = {};
    if (hack && case_id) {
      getHack = await Hack.findById(hack);
      hackaton.name = getHack.name;
      hackaton.teamCase = getHack.cases.find((item) => item.id === case_id);
      teamFields.hackaton = hackaton;
    }
    if (link) {
      teamFields.hackaton.link = link;
    }
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
    const user = await User.findOne({ email: email }).select(
      "-password -avatar -role -date"
    );
    if (!user) {
      return res.status(400).json({
        msg: "Пользователь не зарегистрирован",
      });
    }
    try {
      let team1 = await Teams.findOne({ capt: req.user.id });
      let team2 = await Teams.find({ team: { _id: "5f73014f305a044630c520a2" } });
      console.log(user);
      console.log(team1);
      console.log(team2);
      res.json("hello");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Ошибка сервера");
    }
  }
);

//@route GET api/hack/team/me
//@desc Get my team
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

//@route DELETE api/hack/team
//@desc Delete team
router.delete("/", auth, async (req, res) => {
  try {
    const team = await Teams.findOne({ capt: req.user.id });
    await team.remove();
    res.json(null);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Ошибка сервера" });
  }
});

//@route DELETE api/hack/team
//@desc delete teammate
router.delete("/:id", auth, async (req, res) => {
  try {
    let team = await Teams.findOne({ team: { _id: req.params.id } });
    const index = team.team.map((item) => item.id).indexOf(req.params.id);
    team.team.splice(index, 1);
    await team.save();
    res.json(team);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Ошибка сервера" });
  }
});

module.exports = router;

/*


 if (userTeam) {
        return res
          .status(400)
          .json({ msg: "Пользователь уже зарегистрирован в команде" });
      } else {
        const teams = await Teams.findOne({ capt: req.user.id });
        let newUser = {
          user: user,
          name: user.name,
          email: user.email,
        };
        teams.team.unshift(newUser);
        //await teams.save();
        res.json(teams);


*/
