import { requester } from 'requester';
import $ from 'jquery';

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
                $('#logout-button').removeClass('hidden');
                $('#right-button').hide();
                $('#left-button').hide();
                //header.setUserName(); //setting the username in the header
                //header.logged(); //changing header if logged
                console.log('logged');
            } else {
                //header.loggedOut(); //changing header if logged out
                $('#logout-button').addClass('hidden');
                $('#right-button').show();
                $('#left-button').show();
                console.log('not logged');
            }
        });
    }
    
    updateUserData (data){
        const user = firebase.auth().currentUser,
            userId = user.uid;
        return firebase.database().ref('users/' + userId).update(data);
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

    getData() {
        return $.get();
    }

    updateData (data){
        return firebase.database().ref('products/vafli/3').update(data);
    }
}

let data = new Data();

export { data };