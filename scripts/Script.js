document.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
    if (window.scrollY > 1) {
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }
})

document.addEventListener("DOMContentLoaded", function() {
    var copybutton = document.getElementById("copy-button");
    var copybutton1 = document.getElementById("copy-button1");

    copybutton.onclick = function(){
        navigator.clipboard.writeText("eng.anthonyedward@gmail.com");
    }

    copybutton1.onclick = function(){
        navigator.clipboard.writeText("+201222409650");
    }
});