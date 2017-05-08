import { templates } from 'templates';
import { data } from 'data';

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
            for (let i = 0; i < data.biofoods.length; i += 1) {
                let $searchedName = data.biofoods[i].name;
                if ($searchedName.toLowerCase().indexOf($id.toLowerCase()) >= 0) {
                    $products.push(data.biofoods[i]);
                } 
            }
            for (let i = 0; i < data.cosmetics.length; i += 1) {
                let $searchedName = data.cosmetics[i].name;
                if ($searchedName.toLowerCase().indexOf($id.toLowerCase()) >= 0) {
                    $products.push(data.cosmetics[i]);
                } 
            }
            for (let i = 0; i < data.supplements.length; i += 1) {
                let $searchedName = data.supplements[i].name;
                if ($searchedName.toLowerCase().indexOf($id.toLowerCase()) >= 0) {
                    $products.push(data.supplements[i]);
                } 
            }
            $main.html(template($products));
        }) 
          .then(() => {
              let $logoutButton = $('#logout');
              $logoutButton.on('click',() => {
                  data.logOut()
                      .then(data.checkIfLogged);
              });
        });
}