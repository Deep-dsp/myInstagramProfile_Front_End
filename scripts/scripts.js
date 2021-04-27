// Deepkumar Patel
// ROOTREEINC Technical Challenge
// Languages Used:
//     1) HTML5
//     2) CSS3 (SaaS framework)
//     3) VanillaJs

// Import JS Components -> Created separate modules according to functionality to manage/organize code
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