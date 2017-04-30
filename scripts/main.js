import 'jquery';
import Sammy from 'sammy';
import 'handlebars';
import Bootstrap from 'bootstrap';
import { getTemplate } from 'loginController';

var sammyApp = Sammy('#wrapper', function(){
    this.get('#/', function () {
        this.redirect('#/home');
    });

    this.get('#/home', function() {
        console.log('home');
    });

    this.get('#/register', function() {
        console.log('register');
    });

    this.get('#/login', function() {
        return getTemplate();
    });

    this.get('#/user', function() {
        console.log('user');
    });

    $(function () {
        sammyApp.run('#/');
    });
});
