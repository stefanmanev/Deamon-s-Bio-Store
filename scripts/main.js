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
import { getTemplate as getBiofoodDetailedPage } from 'biofoodDetailedController';
import { getTemplate as getCosmeticsDetailedPage } from 'cosmeticDetailedController';
import { getTemplate as getSupplementsDetailedPage } from 'supplementDetailedController';
import { data } from 'data';

var sammyApp = Sammy(function(){
    this.get('#/', function () {
        this.redirect('#/home');
    });

    this.get('#/home', getHome);

    this.get('#/register', getRegister);

    this.get('#/login', getLogin);

    this.get('#/about', getAbout);

    this.get('#/biofoods', getCategory('/biofoods'));

    this.get('#/biofoods/:id', getBiofoodDetailedPage);

    this.get('#/cosmetics', getCategory('/cosmetics'));

    this.get('#/cosmetics/:id', getCosmeticsDetailedPage);

    this.get('#/supplements', getCategory('/supplements'));

    this.get('#/supplements/:id', getSupplementsDetailedPage);
    
    $(function () {
        sammyApp.run('#/');
    });
});

let value = $('#testInput').val();
let button = $('#testButton').on('click',() => {
    /*let object = {
        username: 'shturkel',
        comment: 'arebe',
        products: {
            vafla: 'chudo',
            chips: 'nqkyv'
        }
    };*/
    //data.updateUserData(object);
    data.readUserDataOnce()
        .then((e) => {console.log(e.val())} );

    firebase.database().ref('products/supplements').set(supplements);

    // data.updateData({name: 'chikiriki', cena: 123});
});


export function sammy() {
    return sammyApp;
}
