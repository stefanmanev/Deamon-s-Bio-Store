import $ from 'jquery';
import toastr from 'toastr';
import Sammy from 'sammy';
import Handlebars  from 'handlebars';
import Bootstrap from 'bootstrap';
import { getTemplate as getLogin } from 'loginController';
import { getTemplate as getHome } from 'homeController';
import { getTemplate as getRegister } from 'registerController';
import { getTemplate as getAbout } from 'aboutController';
import { getTemplate as getBiofood } from 'biofoodController';
import { getTemplate as getCosmetics } from 'cosmeticsController';
import { data } from 'data';

var sammyApp = Sammy(function(){
    this.get('#/', function () {
        this.redirect('#/home');
    });

    this.get('#/home', getHome);

    this.get('#/register', getRegister);

    this.get('#/login', getLogin);

    this.get('#/about', getAbout);

    this.get('#/biofoods', getBiofood);

    this.get('#/cosmetics', getCosmetics);
    
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

    let products = [{
                img: 'http://biomag.bg/media/catalog/product/cache/1/image/540x599/9df78eab33525d08d6e5fb8d27136e95/o/v/oveseni_yadki.jpg',
                product: 'овесени ядки',
                description: 'идеални за вкусна и здравословна закуска',
                cena: '12лв'
            },
            {
                img: 'http://biomag.bg/media/catalog/product/cache/1/image/540x599/9df78eab33525d08d6e5fb8d27136e95/o/v/oveseni_yadki.jpg',
                product: 'овесени ядки',
                description: 'идеални за вкусна и здравословна закуска',
                cena: '12лв'
            },
            {
                img: 'http://biomag.bg/media/catalog/product/cache/1/image/540x599/9df78eab33525d08d6e5fb8d27136e95/o/v/oveseni_yadki.jpg',
                product: 'овесени ядки',
                description: 'идеални за вкусна и здравословна закуска',
                cena: '12лв'
            },
            {
                img: 'http://spirala.bg/wp-content/uploads/2016/05/probiotichnavafla.jpg',
                product: 'вафла',
                description: 'много сладка и вкусна',
                cena: '3лв'
            },
            {
                img: 'http://spirala.bg/wp-content/uploads/2016/05/probiotichnavafla.jpg',
                product: 'вафла',
                description: 'много сладка и вкусна',
                cena: '3лв'
            },
            {
                img: 'http://biomag.bg/media/catalog/product/cache/1/image/540x599/9df78eab33525d08d6e5fb8d27136e95/o/v/oveseni_yadki.jpg',
                product: 'овесени ядки',
                description: 'идеални за вкусна и здравословна закуска',
                cena: '12лв'
            },
            {
                img: 'http://spirala.bg/wp-content/uploads/2016/05/probiotichnavafla.jpg',
                product: 'вафла',
                description: 'много сладка и вкусна',
                cena: '3лв'
            },
            {
                img: 'http://spirala.bg/wp-content/uploads/2016/05/probiotichnavafla.jpg',
                product: 'вафла',
                description: 'много сладка и вкусна',
                cena: '3лв'
            }];

            let cosmetics = [{
                img: 'http://ivis.bg/products_images/straight_shampoo_250ml_pboxx-pixelboxx-103098_300dpi_1772h_1772w_38891911.jpg',
                product: 'шампоан',
                description: 'за нормална коса',
                cena: '12лв'
            },
            {
                img: 'http://ivis.bg/products_images/straight_shampoo_250ml_pboxx-pixelboxx-103098_300dpi_1772h_1772w_38891911.jpg',
                product: 'шампоан',
                description: 'за нормална коса',
                cena: '12лв'
            },
            {
                img: 'http://ivis.bg/products_images/straight_shampoo_250ml_pboxx-pixelboxx-103098_300dpi_1772h_1772w_38891911.jpg',
                product: 'шампоан',
                description: 'за нормална коса',
                cena: '12лв'
            },
            {
                img: 'http://ivis.bg/products_images/straight_shampoo_250ml_pboxx-pixelboxx-103098_300dpi_1772h_1772w_38891911.jpg',
                product: 'шампоан',
                description: 'за нормална коса',
                cena: '12лв'
            },
            {
                img: 'http://ivis.bg/products_images/straight_shampoo_250ml_pboxx-pixelboxx-103098_300dpi_1772h_1772w_38891911.jpg',
                product: 'шампоан',
                description: 'за нормална коса',
                cena: '12лв'
            }];
    firebase.database().ref('products/cosmetics').set(cosmetics);

    // data.updateData({name: 'chikiriki', cena: 123});
});


export function sammy() {
    return sammyApp;
}
