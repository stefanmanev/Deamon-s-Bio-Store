import { load as loadTemplate } from 'templates';

const $main = $('#main');

export function get() {
    promise.resolve(loadTemplate('login'))
        .then((template) => $main.html(template));
}