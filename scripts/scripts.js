import './components/darkmode.js';
import './components/tabMenu.js';
import './components/storyScript.js';
import './components/imageposts.js';
import './components/navLinkActive.js';

const logo = document.querySelector('.nav-action-useravatar a img');
const userAvatar = "user-avatar-40246059_477969256041101_7925156156605988864_n.jpg";

// user avatar onload
window.addEventListener('load', ()=>{
    logo.src = `/uploads/${userAvatar}`;
});