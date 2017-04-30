import { load as loadTemplate } from 'templates';

let $main = $('#main');

export function getTemplate(params) {

  Promise.resolve(loadTemplate('login'))
  .then((template) => {
    $main.html(template());
  });
}