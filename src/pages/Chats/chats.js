import {chatsTmpl} from "./chats.hbs";

let root = document.getElementById('root');
let tmpl = Handlebars.compile(chatsTmpl);


root.innerHTML = tmpl({
    username: 'John',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eum hic odit pariatur sint. Aliquam cumque eveniet mollitia nam quaerat, qui soluta? Ad adipisci aliquam, aspernatur beatae dolorum ducimus exercitationem fugit hic nisi, quaerat, repudiandae sed temporibus! Ad, doloremque dolorum eaque eum excepturi laudantium nesciunt provident quisquam, repellat saepe unde.',
    time: '10:20',
    messagesCount: 5,
    userAvatar: 'https://via.placeholder.com/150'
});