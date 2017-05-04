import { templates } from 'templates';
import $ from 'jquery';
import { data } from 'data';
import { sammy } from 'main';
import toastr from 'toastr';

let $main = $('#main');

export function getTemplate(params) {
  data.checkIfLogged();
  Promise.resolve(templates.getTemplate('register'))
    .then((template) => { $main.html(template); })
    .then(() => {
      let $btnRegister = $('#btn-register');
      $btnRegister.on('click', () => {
        var newUser = {
          username: $('#tb-newUsername').val(), //email
          email: $('#tb-newEmail').val(), //username
          password: $('#tb-newPassword').val()
        };
        data.createUser(newUser.email, newUser.password)
            .then(() => { data.writeUserData({username: newUser.username});})
            .then(data.checkIfLogged)
            .then(()=>{this.redirect('#/home');
                        toastr.success('Register successful!');})
            .catch((err) => toastr.error(err.message));
       });
    });
}