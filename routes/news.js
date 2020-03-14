const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const News = require('../models/News');

// @route POST api/news
// @desc add news in table
router.post('/', auth, [
    check('title', 'Укажите заголовок новости').not().isEmpty(),
    check('desc', 'Введите описание').not().isEmpty()
], async (req, res) => {
    //валидация запроса
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //check role
    if (req.user.role !== 'admin') {
        return res.status(401).send('Нет доступа');
    }

    try {
        //get data from req
        const { title, desc } = req.body;   
        //make event object
        let newsFields = {
            title, desc
        };
        //save object
        let news = new News(newsFields);
        await event.save();
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

// @router GET api/news
// @desc last 3 news
router.get('/', async (req,res) => {
    try {
        let date = Date.now();
        const events = await News.find({date: {$gt: date}}).sort({ date: 'asc'}).limit(3);
        res.send(news);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
})

// @router GET api/news/all
// @desc get all news
router.get('/all', async (req,res) => {
    try {
        let date = Date.now();
        const events = await News.find({date: {$gt: date}}).sort({ date: 'asc'});
        res.send(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
})

module.exports = router;