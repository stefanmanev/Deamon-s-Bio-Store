import $ from 'jquery';
import toastr from 'toastr';
import { templates } from 'templates';
import { CONSTANTS } from 'constants';

let $main = $('#main');

export function getTemplate(params) {

  Promise.resolve(templates.getTemplate('register'))
    .then((template) => {
      $main.html(template);
      $('#btn-register').on('click', function () {
        var newUser = {
          username: $('#tb-newUsername').val(),
          password: $('#tb-newPassword').val()
        };

        if (newUser.username.length < CONSTANTS.USERNAME_MIN_LENGTH || newUser.username.length > CONSTANTS.USERNAME_MAX_LENGTH) {
          toastr.error('Username must be between 3 and 20 symbols');
          return;
        }
        if (newUser.password.length < CONSTANTS.PASSWORD_MIN_LENGTH || newUser.password.length > CONSTANTS.PASSWORD_MAX_LENGTH) {
          toastr.error('Password must be between 3 and 20 symbols');
          return;
        }
        if (/\W+/.test(newUser.username)) {
          toastr.error('Username contains invalid symbols');
          return;
        }
        if (/\W+/.test(newUser.password)) {
          toastr.error('Password contains invalid symbols');
          return;
        }
      });
    });
}