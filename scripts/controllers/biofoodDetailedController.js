import { templates } from 'templates';
import { data } from 'data';

let $main = $('#main');
let $id = $(location).attr('href');
$id = $id.split("/:");
$id = $id[1];

export function getTemplate(params) {
    data.checkIfLogged();
      Promise.all([templates.getTemplate('biofoodDetailed'),
                data.getAllProducts()])
        .then(([template, data]) => {
            $main.html(template(data.biofoods[$id]));
        }) 
          .then(() => {
              let $logoutButton = $('#logout');
              $logoutButton.on('click',() => {
                  data.logOut()
                      .then(data.checkIfLogged);
              });
        });
}