import { Router } from 'express';
import Course from './../models/course.js';

const router = Router();

router.get('/', (req, res) => {
    res.render('add', { title: 'Добавить курс', isAdd: true });
});

router.post('/', async (req, res) => {
    const title = req.body.title;
    const price = req.body.price;
    const img = req.body.img;

    const course = new Course(title, price, img);
    await course.save();
    res.redirect('/courses');
});

export default router;
