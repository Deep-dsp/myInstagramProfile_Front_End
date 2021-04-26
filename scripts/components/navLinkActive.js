// Show-hide search container
// Dot::After rotation

const search = document.querySelector('.nav-actions li.search');
const navsearch = document.querySelector('.nav-search');
const close = document.querySelector('.close-button');

search.addEventListener('click', ()=>{
    navsearch.classList.toggle('nav-anim');
})

close.addEventListener('click', ()=>{
    navsearch.classList.remove('nav-anim');
})
