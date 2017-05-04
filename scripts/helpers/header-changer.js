const header = {
    logged: () => {
        $('#logout-button').removeClass('hidden');
        $('#right-button').hide();
        $('#left-button').hide();
    },
    loggedOut: () => {
        $('#logout-button').addClass('hidden');
        $('#right-button').show();
        $('#left-button').show();
    },
    setUserName: () => {
        data.readUserDataOnce().then((data) => { //getting the username from the database
            const userdata = data.val();
            $('.username').text(` Hello ${userdata.username}`).fadeIn('slow');
        });
    },
    setUserNameOut: () => {
        data.readUserDataOnce().then((data) => { //getting the username from the database
            const userdata = data.val();
            $('.username').text(` Hello ${userdata.username}`).fadeOut('slow');
        });
    }
};

export { header };