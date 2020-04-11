const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Employer = require('../../models/Employers/Employer');

// @route POST api/employers
// @desc create/update employer
router.post('/', auth,[
    check('name', 'Введите имя').not().isEmpty(),
    check('tel', 'Укажите номер телефона').isNumeric().isLength({ min: 11, max: 12 }),
    check('email', 'Укажите Email').isEmail()
], async (req,res) => {
    //valid data
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    //get data from request
    const { name, tel, email, description } = req.body;
    //build employer object
    const employerFields = {};
    employerFields.user = req.user.id;
    if (name) employerFields.name = name;
    if (tel) employerFields.tel = tel;
    if (email) employerFields.email = email;
    if (description)  employerFields.description = description;

    try {
        //check employer profile
        let employer = await Employer.findOne({
            user: req.user.id
        })
        if (employer) {
            employer = await Employer.findOneAndUpdate(
                { user: req.user.id },
                { $set: employerFields },
                { new: true }
            );
            return res.json(employer);
        }
        //create new profile
        employer = new Employer(employerFields);
        await employer.save();
        res.json(employer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

// @route GET api/employers
// @desc get 4 epmloyers
router.get('/', async (req,res) => {
    try {
        //get list of employres
        const employers = await Employer.find().select('name vacancy description');
        //send data
        res.json(employers)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

// @route GET api/employers/all
// @desc get all employers
router.get('/', async (req,res) => {
    try {
        //get list of employres
        const employers = await Employer.find().select('name vacancy description');
        //send data
        res.json(employers)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

// @route GET api/employers/:id
// @desc get employer by id
router.get('/:emp_id', async (req, res) => {
    try {
        //get employer by id
        const employer = await Employer.findOne({ id: req.params.id});
        //send data
        res.json(employer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

// @route GET api/employers/me
// @desc get my profile
router.get('/me', auth, async (req, res) => {
    try {
        //find employer by user id
        const employer = await Employer.find({ user: req.user.id });
        //chek if exist
        if (!employer) {
            return res.status(400).json({ msg: 'Профиль отсутствует' });
        }
        res.json(employer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});


// @route PUT api/employers/vacancy
// @desc add emploers vacancy
router.put('/vacancy', auth, [
    check('name', 'Укажите название вакансии').not().isEmpty(),
    check('skills', 'Укажите навыки').not().isEmpty()
], async (req,res) => {
        //valid data
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        //get data from req
        const { 
            name, description, skills
        } = req.body;
        const newVac = {
            name, description
        };
        newVac.skills = skills.split(',').map(skills => skills.trim());
        try {
            //get profile employer
            const employer = await Employer.findOne({ user: req.user.id });
            //add vacancy
            employer.vacancy.unshift(newVac);
            await employer.save();
            res.json(employer);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Ошибка сервера');
        }  
});

// @router DELETE api/employers/vacancy/:id
// @desc Delete experience
router.delete('/vacancy/:vac_id', auth, async (req,res) => {
    try {
        //find employer profile
        const employer = await Employer.findOne({ user: req.user.id });
        //get index
        const removeIndex = employer.vacancy.map(item => item.id).indexOf(req.params.exp_id);
        //delete vac in array
        employer.vacancy.splice(removeIndex,1);
        await employer.save();
        res.json(employer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

// TEST
router.post('/test', auth, async (req, res) => {
    if (req.user.role === 'admin') console.log('True');
    res.send(req.user);
});

module.exports = router;