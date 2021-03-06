import { requester } from 'requester';
import $ from 'jquery';
import { header } from 'header';

class Data {
    createUser(email,password){
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    
    loginUser(email,password){
        return firebase.auth().signInWithEmailAndPassword(email,password);
    }
    
    checkIfLogged(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                header.logged(); //changing header if logged
                 //header.setUserName(); //setting the username in the header
                console.log('logged');
            } else {
                header.loggedOut(); //changing header if logged out
                console.log('not logged');
            }
        });
    }
    
    updateUserData (data){
        const user = firebase.auth().currentUser,
            userId = user.uid;
        return firebase.database().ref('users/' + userId).push(data);
    }

    removeUserData (data){
        const user = firebase.auth().currentUser,
            userId = user.uid;
        return firebase.database().ref('users/' + userId).remove(data);
    }
    
    
    writeUserData(data){  //data is a object {---}
        const user = firebase.auth().currentUser,
            userId = user.uid;
        return firebase.database().ref('users/' + userId).set(data);  //users/+ uid ---> path to the individual user data
    }
    
    readUserDataOnce(){
        const userId = firebase.auth().currentUser.uid;
        return firebase.database().ref('/users/' + userId).once('value');
    }
    
    logOut(){
        return firebase.auth().signOut();
    }

    getAllProducts(category) {
        let $url = `https://biostore-final.firebaseio.com/products${category}.json`;
        return $.get($url);
    }

    updateData (data){
        return firebase.database().ref('products/vafli/3').update(data);
    }
}

let data = new Data();

export { data };