import $ from 'jquery';
import toastr from 'toastr';
import { templates } from 'templates';
import { data } from 'data';


let $main = $('#main');
export function getTemplate(params) {
  Promise.resolve(templates.getTemplate('register'))
    .then((template) => {
      $main.html(template);
      $('#btn-register').on('click', function () {
        var newUser = {
          username: $('#tb-newUsername').val(), //email
          email: $('#tb-newEmail').val(), //username
          password: $('#tb-newPassword').val(),
          passwordConfirm: $('#tb-newPassword-confirm'),
        };
        data.createUser(newUser.email, newUser.password)
            .then(() => { data.writeUserData({username: newUser.username});})
            .then(data.checkIfLogged)
            .catch((err) => toastr.error(err.message));
      });
    });
}