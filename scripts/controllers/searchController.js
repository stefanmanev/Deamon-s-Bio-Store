import { templates } from 'templates';
import { data } from 'data';
import { searchHelper } from 'searchHelper';

let $main = $('#main');
export function getSearchResults(params) {
    let $id = $(location).attr('href');
    $id = $id.split("/:");
    $id = $id[1];

    let $products = [];

    data.checkIfLogged();
      Promise.all([templates.getTemplate('searchResults'),
                data.getAllProducts(params)])
        .then(([template, data]) => {
            $main.html(template(searchHelper(data.biofoods, data.cosmetics, data.supplements, $id)));
        }) 
          .then(() => {
              let $logoutButton = $('#logout');
              $logoutButton.on('click',() => {
                  data.logOut()
                      .then(data.checkIfLogged);
              });
        });
}