import $ from 'jquery';
import toastr from 'toastr';
import Sammy from 'sammy';
import Handlebars  from 'handlebars';
import Bootstrap from 'bootstrap';
import { getTemplate as getLogin } from 'loginController';
import { getTemplate as getHome } from 'homeController';
import { getTemplate as getRegister } from 'registerController';
import { getTemplate as getAbout } from 'aboutController';
import { data } from 'data';

var sammyApp = Sammy(function(){
    this.get('#/', function () {
        this.redirect('#/home');
    });
    this.get('#/home', getHome);

    this.get('#/register', getRegister);

    this.get('#/login', getLogin);

    this.get('#/about', getAbout);

    this.get('#/user', function() {
        toastr.success('dsdasdasadas');
    });
    $(function () {
        sammyApp.run('#/');
    });
});



let value = $('#testInput').val();
let button = $('#testButton').on('click',() => {
    let object = {
        username: 'shturkel',
        comment: 'arebe',
        products: {
            vafla: 'chudo',
            chips: 'nqkyv'
        }
    };
    data.updateUserData(object);
    data.readUserDataOnce()
        .then((e) => {console.log(e.val())} );

    let kkk = {
        
            vafli:[{
                name: 'harmonica',
                cena:123
            },
            {
                name: 'republika',
                cena:123
            }],
            chips:[
                {name:'chio', 
                cena: 12}],


    };
    firebase.database().ref('products/').set(kkk);
    // data.updateData({name: 'chikiriki', cena: 123});
});


export function sammy() {
    return sammyApp;
}
