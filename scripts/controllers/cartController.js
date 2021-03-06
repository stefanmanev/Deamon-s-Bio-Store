import $ from 'jquery';
import { templates } from 'templates';
import { data } from 'data';
 
let $removeButton = $('.cart-remove-button');
let $main = $('#main');
export function getTemplate(params) {
    data.checkIfLogged();
      Promise.all([templates.getTemplate('cart'),
                data.readUserDataOnce()])
        .then(([template, data]) => {
            $main.html(template(data.val()));
        }) 
        .then(() => {
            let $removeButton = $('.cart-remove-button');
            let $ul = $('ul').eq(2);
            $.each($removeButton, (i, el) => {
                $(el).on('click', function(ev) {
                let $ev = $(ev.target);
                $(this).parents('.cart-item').remove();
                $('#price-list').remove();
                data.removeUserData();
                });
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