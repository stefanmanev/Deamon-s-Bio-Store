import { templates } from 'templates';
import { data } from 'data';

let $main = $('#main');
export function getTemplate(params) {
    data.checkIfLogged();
      Promise.all([templates.getTemplate('biofoodDetailed'),
                data.getAllProducts()])
        .then(([template, data]) => {
            $main.html(template(data));
        }) 
          .then(() => {
              let $logoutButton = $('#logout');
              $logoutButton.on('click',() => {
                  data.logOut()
                      .then(data.checkIfLogged);
              });
        });
}