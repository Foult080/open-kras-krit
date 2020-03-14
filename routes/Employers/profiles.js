const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Profile = require('../../models/Employers/Profile');

// @route GET api/profile/me
// @desc get current user profile
router.get('/me', auth, async (req,res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']);
        if (!profile) {
            return res.status(400).json({ msg: 'Профиль отсутствует' });
        }
        res.json(profile);
    } catch (errors) {
        console.error(errors.message);
        res.status(500).send('Ошибка сервера');
    }
});

// @route GET api/profile
// @desc get all students profiles
router.get('/', auth, async(req,res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

// @route Get api/profile/:user_id
// @desc get profile by id
router.get('/:user_id', auth, async (req,res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id}).populate('user', ['name', 'avatar']);
        if (!profile) {
            return res.status(400).json({ msg: 'Профиль не найден' });
        }
        return res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Профиль не найден' });
        }
        res.status(500).send('Ошибка сервера');
    }
});


// @route POST api/profile
// @desc create/update user profile
router.post('/', auth,[
    check('name', 'Введите имя').not().isEmpty(),
    check('tel', 'Укажите номер телефона').isNumeric().isLength({ max: 11 }),
    check('email', 'Укажите Email').isEmail(),
    check('skills','Укажите навыки').not().isEmpty()
], async (req,res) => {
    //valid data
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    //get data from request
    const { name, tel, email, status, spec, skills, github } = req.body;
    //build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (name) profileFields.name = name;
    if (tel) profileFields.tel = tel;
    if (email) profileFields.email = email;
    if (status) profileFields.status = status;
    if (github) profileFields.github = github;
    if (spec) profileFields.spec = spec;
    if (skills) profileFields.skills = skills.split(',').map(skills => skills.trim());

    try {
        //check user profile
        let profile = await Profile.findOne({
            user: req.user.id
        })
        if (profile) {
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );
            return res.json(profile);
        }
        //create new profile
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

// @route PUT api/profile/experience
// @desc add experience in profile
router.put('/experience', auth, [
    check('title', 'Укажите название работы').not().isEmpty(),
    check('company', 'Укажите наименование организации').not().isEmpty()
], async (req,res) => {
        //valid data
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        //get data from req
        const { 
            title, company, description, from, to, current
        } = req.body;
        const newExp = {
            title, company, description, from, to, current
        };
        try {
            //get profile
            const profile = await Profile.findOne({ user: req.user.id });
            //add experinece
            profile.experience.unshift(newExp);
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Ошибка сервера');
        }  
});

// @router DELETE api/profile/experience/:id
// @desc Delete experience
router.delete('/experience/:exp_id', auth, async (req,res) => {
    try {
        //find profile
        const profile = await Profile.findOne({ user: req.user.id });
        //get index
        const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);
        //delete exp in array
        profile.experience.splice(removeIndex,1);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

// @route PUT api/profile/pub-events
// @desc add experience in profile
router.put('/pub-events', auth, [
    check('title', 'Укажите название конкурса').not().isEmpty(),
    check('description', 'Укажите описание конкурса').not().isEmpty(),
    check('place', 'Укажите занятое место').not().isEmpty()
], async (req,res) => {
        //valid data
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        //get data from req
        const { 
            title, description, place
        } = req.body;
        const newEvent = {
            title, description, place
        };
        try {
            //get profile
            const profile = await Profile.findOne({ user: req.user.id });
            //add pub-event
            profile.pubEvents.unshift(newEvent);
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Ошибка сервера');
        }  
});

// @router DELETE api/profile/pub-events/:id
// @desc Delete pub-event
router.delete('/pub-events/:ev_id', auth, async (req,res) => {
    try {
        //find profile
        const profile = await Profile.findOne({ user: req.user.id });
        //get index
        const removeIndex = profile.pubEvents.map(item => item.id).indexOf(req.params.ev_id);
        //delete event in array
        profile.pubEvents.splice(removeIndex,1);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});


// @route PUT api/profile/prof-events
// @desc add experience in profile
router.put('/prof-events', auth, [
    check('title', 'Укажите название конкурса').not().isEmpty(),
    check('description', 'Укажите описание конкурса').not().isEmpty(),
    check('place', 'Укажите занятое место').not().isEmpty()
], async (req,res) => {
        //valid data
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        //get data from req
        const { 
            title, description, place
        } = req.body;
        const newEvent = {
            title, description, place
        };
        try {
            //get profile
            const profile = await Profile.findOne({ user: req.user.id });
            //add pub-event
            profile.profEvents.unshift(newEvent);
            await profile.save();
            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Ошибка сервера');
        }  
});

// @router DELETE api/profile/prof-events/:id
// @desc Delete prof-event
router.delete('/prof-events/:ev_id', auth, async (req,res) => {
    try {
        //find profile
        const profile = await Profile.findOne({ user: req.user.id });
        //get index
        const removeIndex = profile.profEvents.map(item => item.id).indexOf(req.params.ev_id);
        //delete event in array
        profile.profEvents.splice(removeIndex,1);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});



module.exports = router;