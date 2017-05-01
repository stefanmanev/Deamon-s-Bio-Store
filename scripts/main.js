import $ from 'jquery';
import toastr from 'toastr';
import Sammy from 'sammy';
import Handlebars  from 'handlebars';
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
        toastr.success('dsdasdasadas');
    });

    $(function () {
        sammyApp.run('#/');
    });
});
