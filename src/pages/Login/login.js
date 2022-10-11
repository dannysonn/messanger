import {loginTmpl} from "./login.hbs";

let root = document.getElementById('root');
let html = Handlebars.compile(loginTmpl);


root.insertAdjacentHTML('afterbegin', html({}));