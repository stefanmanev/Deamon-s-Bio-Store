import 'jquery';
import Sammy from 'sammy';
import 'handlebars';
import Bootstrap from 'bootstrap';
import { getTemplate as getLogin } from 'loginController';
import { getTemplate as getHome } from 'homeController';
import { getTemplate as getRegister } from 'registerController';
import { data } from 'data';

var sammyApp = Sammy('#wrapper', function(){
    this.get('#/', function () {
        this.redirect('#/home');
    });

    this.get('#/home', getHome);

    this.get('#/register', getRegister);

    this.get('#/login', getLogin);

    this.get('#/user', function() {
        data.getProducts().then((data) => console.log(data));
    });

    $(function () {
        sammyApp.run('#/');
    });
});
