const links = document.querySelectorAll(".link-item");
const checkebox = document.querySelector("#checkbox-menu")


for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        checkebox.checked = false
    });
}

