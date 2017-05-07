import { templates } from 'templates';
import { data } from 'data';
import { showSlides } from 'showSlides';
import toastr from 'toastr';

let $main = $('#main');

export function getTemplate(params) {
    data.checkIfLogged();
      Promise.all([templates.getTemplate('home'),
                data.getAllProducts('')])
        .then(([template, data]) => {
            $main.html(template(data));
        }) 
          .then(() => {
              let $logoutButton = $('#logout');
              $logoutButton.on('click',() => {
                  data.logOut()
                      .then(data.checkIfLogged)
                      .then(toastr.success('Logout successful!'));
              });
        })
          .then(showSlides);
}