const header = {
    logged: () => {
        $('#shopping-cart-button').removeClass('hidden');
        $('#logout-button').removeClass('hidden');
        $('#right-button').hide();
        $('#left-button').hide();
    },
    loggedOut: () => {
        $('#shopping-cart-button').addClass('hidden');
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