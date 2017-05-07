import { templates } from 'templates';
import { data } from 'data';

let $main = $('#main');
export function getTemplate(params) {
    data.checkIfLogged();
      Promise.all([templates.getTemplate('cart'),
                data.readUserDataOnce()])
        .then(([template, data]) => {
            console.log(data.val());
            $main.html(template(data.val()));
        }) 
          .then(() => {
              let $logoutButton = $('#logout');
              $logoutButton.on('click',() => {
                  data.logOut()
                      .then(data.checkIfLogged);
              });
        });
}