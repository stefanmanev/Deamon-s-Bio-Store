import 'jquery';
import Sammy from 'sammy';
import 'handlebars';
import Bootstrap from 'bootstrap';
import { getTemplate as getLogin } from 'loginController';
import { getTemplate as getHome } from 'loginController';

var sammyApp = Sammy('#wrapper', function(){
    this.get('#/', function () {
        this.redirect('#/home');
    });

    this.get('#/home', function() {
        return getHome();
    });

    this.get('#/register', function() {
        console.log('register');
    });

    this.get('#/login', function() {
        return getLogin();
    });

    this.get('#/user', function() {
        console.log('user');
    });

    $(function () {
        sammyApp.run('#/');
    });
});
