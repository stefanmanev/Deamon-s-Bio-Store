import $ from 'jquery';
import { templates } from 'templates';
import { data } from 'data';
import toastr from 'toastr';

let $main = $('#main');

export function getTemplate(params) {
    let $id = $(location).attr('href');
    $id = $id.split("/:");
    $id = $id[1];

    data.checkIfLogged();
      Promise.all([templates.getTemplate('productDetailed'),
                data.getAllProducts(params)])
        .then(([template, res]) => {
            $main.html(template(res[$id]));
            let $cartButton = $('#cartButton');
            $cartButton.on('click', () => {
                data.updateUserData(res[$id]);
                toastr.success('Added to cart!');
            });
        }) 
        .then(() => {
            let $facebook = $('.social-networking .facebook');
            let $twitter  = $('.social-networking .twitter');
            $facebook.on('click', () => {
                window.open(
                'https://www.facebook.com/sharer/sharer.php?u=example.org',
                '_blank' // <- This is what makes it open in a new window.
                );
            });
            $twitter.on('click', () => {
                window.open(
                    'https://twitter.com/intent/tweet',
                    '_blank'
                );
            });
        })
          .then(() => {
              let $logoutButton = $('#logout');
              $logoutButton.on('click',() => {
                  data.logOut()
                      .then(data.checkIfLogged);
              });
        });
}