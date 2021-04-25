const tabs = document.querySelectorAll('[data-target]');
const dataContent = document.querySelectorAll('.data-content');
const navlist = document.querySelectorAll('.post-bar');
const clicklink = document.querySelectorAll('.click-link');

tabs.forEach(tab=>tab.addEventListener('click',()=>{
    const target = document.querySelector(tab.dataset.target);
    dataContent.forEach(content=>{
        content.classList.remove('active');
    });
    target.classList.add('active');
}));

navlist.forEach(data => data.addEventListener('click', ()=>{
    clicklink.forEach(click=>{
        click.querySelector('a').classList.remove('active-bar');
    })
    data.querySelector('a').classList.add('active-bar');
}))