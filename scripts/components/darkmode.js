//This component -> toggle between normal and 
// dark mode 

// Delaration
const body = document.querySelector("body");
const darkbutton = document.querySelector("button");
const darkimage = darkbutton.querySelector("img");

darkbutton.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode-on');
});