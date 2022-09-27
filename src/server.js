const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require('hbs');
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
   res.render('login.hbs', {title: 'Login'});
});

app.get('/registration', (req, res) => {
    res.render('registration.hbs', {title: 'Registration'});
});

app.get('/chats', (req, res) => {
    res.render('chats.hbs', {title: 'Chats'});
});

app.get('/profile', (req, res) => {
    res.render('profile.hbs', {title: 'Profile'});
});

app.listen(PORT, () => {
   console.log(`Мой текст в логе после запуска ${PORT}!`);
});