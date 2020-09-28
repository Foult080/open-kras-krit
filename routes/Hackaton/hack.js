const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Hack = require("../../models/Hackaton/Hack");

//@route POST api/hack/
//@desc create new hackaton
router.post(
  "/",
  auth,
  [
    check("name", "Укажите название Хакатона").not().isEmpty(),
    check("cases", "укажите кейсы"),
  ],
  async (req, res) => {
    //check data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check role
    if (req.user.role !== "admin") {
      return res.status(401).json({ msg: "Нет доступа" });
    }
    try {
      //get data from req
      const { name, cases, status } = req.body;
      const hack = new Hack({ name });
      //add cases for hackaton
      cases.forEach((item) => {
        hack.cases.unshift(item);
      });

      //save data
      await hack.save();
      //response to client
      res.json(hack);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "Ошибка сервера" });
    }
  }
);

//@route GET api/hack/all
//@desc get all hack for admin hackatons
router.get("/all", auth, async (req, res) => {
  try {
    const hacks = await Hack.find();
    res.send(hacks);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Ошибка сервера" });
  }
});

//@route GET hack api/hack
//@desc get hack for student
router.get("/", auth, async (req, res) => {
  try {
    const hack = await Hack.findOne({ status: "ready" });
    res.send(hack);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Ошибка сервера" });
  }
});

//@route GET api/hack
//@desc get ongoing hack
router.get("/", auth, async (req, res) => {
  try {
    const hack = await Hack.find({ status: "ongoing" });
    res.send(hack);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Ошибка сервера"})
  }
})


//@route PUT api/hack/:id
//@desc change status hackaton
router.put("/:id", auth, async (req, res) => {
  //check role
  if (req.user.role !== "admin") {
    return res.status(401).json({ msg: "Нет доступа" });
  }
  try {
    //get hackaton by id
    let hack = await Hack.findById(req.params.id);
    //change status
    hack.status = "close";
    hack.save();
    //response to user
    res.json(hack);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Ошибка сервера" });
  }
});

module.exports = router;