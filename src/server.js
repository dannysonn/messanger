import {chats} from "./modules/chats.js";
import express from 'express';
import expressHbs from 'express-handlebars';
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const app = express();

app.use(express.static('./'));

app.engine('hbs', expressHbs.engine(
    {
       layoutsDir: 'views/layouts',
       defaultLayout: 'layout',
       extname: 'hbs'
    }
))

app.set('view engine', 'hbs');

hbs.registerPartials(`${__dirname}/views/partials`);

app.get('/', (req, res) => {
   res.render('partials/login.hbs', {title: 'Login'});
});

app.get('/registration', (req, res) => {
    res.render('partials/registration.hbs', {title: 'Registration'});
});

app.get('/chats', (req, res) => {
    res.render('partials/chats.hbs', {title: 'Chats', chats});
});

app.get('/profile', (req, res) => {
    res.render('partials/profile.hbs', {title: 'Profile'});
});

app.get('/404', (req, res) => {
   res.render('partials/error404.hbs', {title: '404'});
});

app.get('/500', (req, res) => {
    res.render('partials/error500.hbs', {title: '404'});
});

app.listen(PORT, () => {
   console.log(`Мой текст в логе после запуска ${PORT}!`);
});