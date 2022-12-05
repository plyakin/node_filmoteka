import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('courses', { title: 'Страница с курсами', isCourses: true });
});

export default router;
