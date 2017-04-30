import { load as loadTemplate } from 'templates';

let $main = $('#main');

export function getTemplate(params) {

  Promise.resolve(loadTemplate('about'))
  .then((template) => {
    $main.html(template);
  });
}