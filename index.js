import express from 'express';
import { create } from 'express-handlebars';
import homeRoutes from './routs/home.js';
import coursesRoutes from './routs/courses.js';
import addRoutes from './routs/add.js';

const app = express();
const hbs = create({
    /* config */
    defaultLayout: 'main',
    extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', homeRoutes);
app.use('/courses', coursesRoutes);
app.use('/add', addRoutes);

//Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
