const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Applicant = require("../../models/Applicant/Applicant");
const Spec = require("../../models/Applicant/Spec");
const Test = require("../../models/Applicant/Test");

// @route POST api/applicant
// @desc add new applicant
router.post(
  "/",
  auth,
  [
    check("tel", "Укажите контактный телефон")
      .isNumeric()
      .isLength({ max: 11 }),
    check("ball", "Укажите средний балл")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    //валидация запроса
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //get data from req
    const { tel, ball, spec } = req.body;
    let user = req.user.id;
    var proff = [];
    spec.forEach(async item => {
      let prof = await Spec.findById(item);
      proff.push(prof);
    });

    //make  applicant object
    let applicantFields = {
      user,
      tel,
      proff,
      ball
    };
    try {
      let applicant = await Applicant.findOne({
        user: req.user.id
      });
      //check if exist and update
      if (applicant) {
        applicant = await Applicant.findOneAndUpdate(
          { user: req.user.id },
          { $set: applicantFields },
          { new: true }
        );
        return res.json(applicant);
      }
      //create new applicant
      applicant = new Applicant(applicantFields);
      await applicant.save();
      res.json(applicant);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Ошибка сервера");
    }
  }
);

//get promise to get rating and spec
async function getRating(item, applicant) {
  let arr = await Applicant.find({ proff: item }).sort({ ball: "desc" });
  let rating = arr.findIndex(item => item._id.equals(applicant._id));
  let spec = await Spec.findById(item);
  const el = { spec, rating };
  return el;
}

// @router GET api/applicant/me
// @desc get my rating by spec
router.get("/me", auth, async (req, res) => {
  try {
    //get applicant by id
    let applicant = await Applicant.findOne({ user: req.user.id });
    if (!applicant) {
      return res
        .status(404)
        .json({ errors: [{ msg: "Профиль абитуриента отсутсвует" }] });
    }
    //make promise
    const ratingsPromise = applicant.proff.map(async item => {
      const rating = await getRating(item, applicant);
      return rating;
    });
    //get data from promise
    const ratings = await Promise.all(ratingsPromise);
    //send data to user
    res.json(ratings);
  } catch (errors) {
    console.error(errors.message);
    res.status(500).send("Ошибка сервера");
  }
});

router.get("/all", auth, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(401).send("Нет доступа");
  }
  try {
    //get applicants
    const applicants = await Applicant.find();
    //send response
    res.json(applicants);
  } catch (errors) {
    console.error(errors.message);
    res.status(500).send("Ошибка сервера");
  }
});

router.post("/spec", auth, async (req, res) => {
  // check grant
  if (req.user.role !== "admin") {
    return res.status(401).send("Нет доступа");
  }
  //get data form req
  const { num, spec, branch, base } = req.body;
  try {
    //make spec obj
    let fields = {
      num,
      spec,
      branch,
      base
    };
    //save data
    const special = new Spec(fields);
    await special.save();
    //send resposd
    res.json(special);
  } catch (err) {
    console.error(errors.message);
    res.status(500).send("Ошибка сервера");
  }
});

router.get("/test", auth, async (req, res) => {
  let applicant = await Applicant.findOne({ user: req.user.id });

  const ratingsPromise = applicant.proff.map(async item => {
    const rating = await getRating(item, applicant);
    return rating;
  });

  const ratings = await Promise.all(ratingsPromise);
  res.json(ratings);
});

//tests actions
router.post(
  "/tests",
  auth,
  [
    check("question", "Задайте вопрос")
      .not()
      .isEmpty(),
    check("answers", "Введите ответы")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    //validation req
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { question, answers } = req.body;
      let quest = new Test({ question, answers });
      await quest.save();
      res.json(quest);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Ошибка сервера");
    }
  }
);

router.get("/test-all", async (req, res) => {
  try {
    const test = await Test.find();
    res.json(test);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Ошибка сервера");
  }
});

router.get("/tests", async (req, res) => {
  try {
    let test = await Test.aggregate([
      { $sample: { size: 4 } }
    ]);
    res.json(test);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ошибка сервера");
  }
});

module.exports = router;

/*
     //check role
    if (req.user.role !== 'admin') {
        return res.status(401).send('Нет доступа');
    }
 */
