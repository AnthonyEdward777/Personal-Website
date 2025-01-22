document.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
    if (window.scrollY > 1) {
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }
})

document.addEventListener("DOMContentLoaded", function() {
    var copybutton2 = document.getElementById("copy-button2");
    var copybutton3 = document.getElementById("copy-button3");
    var copybutton4 = document.getElementById("copy-button4");
    var copybutton5 = document.getElementById("copy-button5");
    var copybutton6 = document.getElementById("copy-button6");
    var copybutton7 = document.getElementById("copy-button7");
    var copybutton8 = document.getElementById("copy-button8");
    var copybutton9 = document.getElementById("copy-button9");
    var copybutton10 = document.getElementById("copy-button10");
    var copybutton11 = document.getElementById("copy-button11");
    var copybutton12 = document.getElementById("copy-button12");

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

    copybutton7.onclick = function(){
        navigator.clipboard.writeText("ANTHONY EHAB HANY FAREED");
    }

    copybutton8.onclick = function(){
        navigator.clipboard.writeText("Commercial International Bank S.A.E.");
    }

    copybutton9.onclick = function(){
        navigator.clipboard.writeText("EG860010022600000100055318527");
    }

    copybutton10.onclick = function(){
        navigator.clipboard.writeText("100055318527");
    }

    copybutton11.onclick = function(){
        navigator.clipboard.writeText("Arkan, Egypt");
    }

    copybutton12.onclick = function(){
        navigator.clipboard.writeText("CIBEEGCX226");
    }
});