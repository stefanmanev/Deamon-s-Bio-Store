let search = document.getElementById("search-form");
let gallery = document.getElementsByClassName("gallery");
let titles = document.getElementsByClassName("img-title");

search.addEventListener("keyup", function (ev) {
    let text = ev.target.value;
    for (let i = 0; i < titles.length; i += 1) {
        let header = titles[i].textContent;
        console.log(titles[i]);
        if (header.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
            gallery[i].style.display = "block";
        } else {
            gallery[i].style.display = "none";
        }
    }
});