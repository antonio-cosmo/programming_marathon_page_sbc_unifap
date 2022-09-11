(()=> {
    const links = document.querySelectorAll(".link-item");
    const checkebox = document.querySelector("#checkbox-menu")
    const toggleMenu = document.querySelector('.checkbox')
    for (i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            checkebox.checked = false
        });
    }

    if ('ontouchstart' in window) {
        window.addEventListener('touchstart',(e)=>{
            const el = e.target
    
            if(el.classList.contains('checkbox')){
                checkebox.checked = !checkebox.checked
            }
            else if(!el.classList.contains('navbar-mobile') && !el.classList.contains('link-item')){
                checkebox.checked = false
            }
    
        })
    }else{
        toggleMenu.addEventListener('click', ()=>{
            checkebox.checked = !checkebox.checked 
        })
    }
})();