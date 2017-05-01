import { templates } from 'templates';

let $main = $('#main');

export function getTemplate(params) {

  Promise.resolve(templates.getTemplate('login'))
  .then((template) => {
    $main.html(template);
  });
}