import { requester } from 'requester';

class Data {
    getProducts() {
        return requester.getJSON('https://biostore-dc055.firebaseio.com/-KiyiUXs4dOWoIDcdPh_/products.json');
    }
}

let data = new Data();


export { data };