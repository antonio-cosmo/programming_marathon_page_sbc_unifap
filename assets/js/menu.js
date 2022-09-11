(()=> {
    const links = document.querySelectorAll(".link-item");
    const checkebox = document.querySelector("#checkbox-menu")
    const container  = document.querySelector('.container')
    for (i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            checkebox.checked = false
        });
    }

    window.addEventListener('touchstart',(e)=>{
        const el = e.target
        if(!el.classList.contains('navbar-mobile') && !el.classList.contains('link-item')){
            checkebox.checked = false
        }
    })
})();