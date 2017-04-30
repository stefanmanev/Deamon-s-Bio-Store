import 'jquery';
import Sammy from 'sammy';
import 'handlebars';
import Bootstrap from 'bootstrap';
import { getTemplate as getLogin } from 'loginController';
import { getTemplate as getHome } from 'homeController';
import { getTemplate as getRegister } from 'registerController';
import { getTemplate as getAbout } from 'aboutController';

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

    this.get('#/about', function() {
        return getAbout();
    });

    this.get('#/user', function() {
        console.log('user');
    });

    $(function () {
        sammyApp.run('#/');
    });
});
