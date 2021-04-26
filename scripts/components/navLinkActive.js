const navlisticon = document.querySelectorAll('.nav-actions li');

navlisticon.forEach(icon => icon.addEventListener('click',(e)=>{ 
    e.preventDefault();
    if(icon.classList.contains('nav-active-link')){
        icon.classList.remove('nav-active-link');    
    }  
    // icon.classList.add('nav-active-link');
}))