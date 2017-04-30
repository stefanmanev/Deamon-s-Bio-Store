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

    this.get('#/home', function() {
        return getHome();
    });

    this.get('#/register', function() {
        return getRegister();
    });

    this.get('#/login', function() {
        return getLogin();
    });

    this.get('#/user', function() {
        data.getProducts().then((data) => console.log(data));
    });

    $(function () {
        sammyApp.run('#/');
    });
});
