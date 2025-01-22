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
    var copybutton2 = document.getElementById("copy-button2");
    var copybutton3 = document.getElementById("copy-button3");
    var copybutton4 = document.getElementById("copy-button4");
    var copybutton5 = document.getElementById("copy-button5");
    var copybutton6 = document.getElementById("copy-button6");

    copybutton.onclick = function(){
        navigator.clipboard.writeText("eng.anthonyedward@gmail.com");
    }

    copybutton1.onclick = function(){
        navigator.clipboard.writeText("+201222409650");
    }

    copybutton2.onclick = function(){
        navigator.clipboard.writeText("Anthony Ehab Hany Edward Farid");
    }

    copybutton3.onclick = function(){
        navigator.clipboard.writeText("Swissquote Bank Ltd");
    }

    copybutton4.onclick = function(){
        navigator.clipboard.writeText("CH4708781000259461000");
    }
    copybutton5.onclick = function(){
        navigator.clipboard.writeText("SWQBCHZZXXX");
    }
    copybutton6.onclick = function(){
        navigator.clipboard.writeText("8781");
    }
});