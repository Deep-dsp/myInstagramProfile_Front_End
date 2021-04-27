// Show-hide search container

// Declaration
const search = document.querySelector('.nav-actions li.search');
const navsearch = document.querySelector('.nav-search');
const close = document.querySelector('.close-button');

// Toggle Search bar when click on search icon
search.addEventListener('click', ()=>{
    navsearch.classList.toggle('nav-anim');
})

// Hide Search bar when click on cross(close) button contained inside search bar itself
close.addEventListener('click', ()=>{
    navsearch.classList.remove('nav-anim');
})
