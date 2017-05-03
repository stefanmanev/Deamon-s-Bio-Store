const header = {
    logged: () => {
        $('#headerSignup, #headerLogin').hide();
        $('#headerLogout, #headerUser').fadeIn(600);
    },
    loggedOut: () => {
        $('#headerLogout, #headerUser').hide();
        $('#headerSignup, #headerLogin').fadeIn(600);
    },
    setUserName: () => {
        dataBase.readUserDataOnce().then((data) => {  //getting the username from the database
                const userdata = data.val();
                $('#usernameSpan').text(` ${userdata.username}`).fadeIn('slow');
            }
        );
    }
};