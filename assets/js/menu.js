const links = document.querySelectorAll(".link-item");
const checkebox = document.querySelector("#checkbox-menu")
const btnTopPage = document.querySelector('.top-page')
let lastScrollPosition = 0
let positionBtnTopPage = btnTopPage.getBoundingClientRect()
for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        checkebox.checked = false
    });
}
