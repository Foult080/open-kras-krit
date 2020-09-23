const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Hack = require("../../models/Hackaton/Hack");

//@route POST api/hack
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
        const { name, cases } = req.body;
        const hack = new Hack({ name });
        cases.forEach(item => {
            hack.cases.unshift(item);
        });
        await hack.save();
        res.json(hack);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Ошибка сервера"})
    }
  }
);

module.exports = router;
