function logOut() {

    Promise.resolve(templates.getTemplate('login'))
        .then((template) => {
            $main.html(template);
        });

}