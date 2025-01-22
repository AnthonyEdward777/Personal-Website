document.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
    if (window.scrollY > 1) {
        header.classList.add("scrolled");
    } else{
        header.classList.remove("scrolled");
    }
})

var copybutton = document.getElementById("copy-button");
var copybutton1 = document.getElementById("copy-button1");
var copybutton2 = document.getElementById("copy-button2");
var copybutton3 = document.getElementById("copy-button3");

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