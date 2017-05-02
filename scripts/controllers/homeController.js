import { templates } from 'templates';
import { data } from 'data';

let $main = $('#main');

export function getTemplate(params) {
    data.checkIfLogged();
      templates.getTemplate('home')
        .then((template) => { $main.html(template); })
          .then(() => {
              let $logoutButton = $('#logout');
              console.log($logoutButton);
              $logoutButton.on('click',() => {
                  console.log(data);
                  data.logOut()
                      .then(data.checkIfLogged);
              });
          });
}