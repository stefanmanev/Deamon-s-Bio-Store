var searchResult = document.getElementById("search-form");

searchResult.addEventListener("keyup", function urlUpdater(ev) {
    if (ev.keyCode === 13) {
        ev.preventDefault();
        searchText = ev.target.value;
        window.location.href += `#/search/:${searchText}`;
    }
});