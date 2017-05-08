import $ from 'jquery';
import toastr from 'toastr';
import Sammy from 'sammy';
import Handlebars  from 'handlebars';
import Bootstrap from 'bootstrap';
import { getTemplate as getLogin } from 'loginController';
import { getTemplate as getHome } from 'homeController';
import { getTemplate as getRegister } from 'registerController';
import { getTemplate as getAbout } from 'aboutController';
import { getTemplate as getCategory } from 'categoryController';
import { getTemplate as getDetailedPage } from 'detailedController';
import { getTemplate as getCart } from 'cartController';
import { data } from 'data';
import { firebase } from 'firebase';

var sammyApp = Sammy(function(){
    this.get('#/', function () {
        this.redirect('#/home');
    });

    this.get('#/home', getHome);

    this.get('#/register', getRegister);

    this.get('#/login', getLogin);

    this.get('#/about', getAbout);

    this.get('#/biofoods', function() {
        getCategory('/biofoods');
    });

    this.get('#/biofoods/:id', function() {
        getDetailedPage('/biofoods');
    });

    this.get('#/cosmetics', function() {
        getCategory('/cosmetics');
    });

    this.get('#/cosmetics/:id', function() {
        getDetailedPage('/cosmetics');
    });

    this.get('#/supplements', function() {
        getCategory('/supplements');
    });

    this.get('#/supplements/:id', function() {
        getDetailedPage('/supplements');
    });

     this.get('#/cart', getCart);
    
    $(function () {
        sammyApp.run('#/');
    });
});



    //firebase.database().ref('products/supplements').set(supplements);



export function sammy() {
    return sammyApp;
}
