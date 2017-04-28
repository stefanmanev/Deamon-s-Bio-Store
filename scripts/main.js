import 'jquery';
import Sammy from 'sammy';
import 'handlebars';
import Bootstrap from 'bootstrap';

var sammyApp = Sammy('#wrapper', function(){
    this.get('#/', function () {
        this.redirect('#/home');
    });

    this.get('#/home', function() {
        console.log('home');
    });

    this.get('#/user/:id', function() {
        console.log(this.params.id);
    });

    this.get('#/user', function() {
        var page = this.params.page;
        console.log(page);
    });

    $(function () {
        sammyApp.run('#/');
    });
});