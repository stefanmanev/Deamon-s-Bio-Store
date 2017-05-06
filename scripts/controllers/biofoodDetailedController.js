import { templates } from 'templates';
import { data } from 'data';

let $main = $('#main');

export function getTemplate(params) {
    let $id = $(location).attr('href');
    $id = $id.split("/:");
    $id = $id[1];

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