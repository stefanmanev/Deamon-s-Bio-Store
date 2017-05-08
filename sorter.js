var button = document.getElementById("arr-by-name");
var galleriesToSort = document.getElementsByClassName("gallery");
galleriesToSort = Array.from(galleriesToSort)
var titlesToSort = document.getElementsByClassName("product-name");
titlesToSort = Array.from(titlesToSort);

export function sorter() {
    button.addEventListener("click", function(ev) {
        let target = ev.target;
        let sortedTitles = titlesToSort.sort(function(a, b) {
            var nameA = a.textContent.toLowerCase();
            var nameB = b.textContent.toLowerCase(); 
            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });

        for (let i = 0; i < galleriesToSort.length; i+= 1) {
            var titleToAdd = sortedTitles[i].textContent
            var priceToAdd = sortedTitles[i].parentElement.getElementsByClassName("price")[0].textContent;
            var imgToAdd = sortedTitles[i].parentElement.parentElement.getElementsByClassName("main-image")[0].currentSrc;
            var urlToAdd = sortedTitles[i].parentElement.parentElement.href;
            galleriesToSort[i].innerHTML =
            `<a href="${urlToAdd}">
                <img class="main-image img-responsive" src="${imgToAdd}" />
                <div class="img-title">
                    <h3 class='product-name'>${titleToAdd}</h3>
                    <p class="price">${priceToAdd}</p>
                </div>
            </a>`
        }
    });
};
