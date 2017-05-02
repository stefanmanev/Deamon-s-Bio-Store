import { templates } from 'templates';
import $ from 'jquery';
import { data } from 'data';
import { sammy } from 'main';


let $main = $('#main');

export function getTemplate() {
  data.checkIfLogged();
  Promise.resolve(templates.getTemplate('login'))
  .then((template) => { $main.html(template); })
    .then(() => {
          let $loginButton = $('#btn-login');
          $loginButton.on('click',() => {
              let email = $('#tb-email').val(),
                  password = $('#tb-password').val();
              data.loginUser(email, password)
                  .then(data.checkIfLogged)
                  .then(this.redirect('#/home'));
          });
      });
}