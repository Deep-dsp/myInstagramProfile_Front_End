// Declarations
const storyparent = document.querySelector('.story-block');
const storyblock = document.querySelector('.story');
const storyimg = storyblock.querySelector('img');
const storyname = storyblock.querySelector('p');
const storylistimg = ["117979003_150310993383608_8230171256159427318_n", "117959120_167203901619414_2027675624293062368_n", "124475190_816056375834942_88416380648179304_n", "121808606_832693580931306_8280371248228921981_n", "118076810_316029936488702_5525788278748589598_n", "117898087_165915638366177_87597771879821321_n", "117888735_324621148880618_2597828011752480673_n"];
const storylist = ["Client Love 💗", "In the Office", "Jobs", "RT | Foundation", "Tradeshows", "Blogs", "Newsletters"];


// Display stories on load
window.addEventListener("load", ()=>{
    
    for(let i=0; i<storylistimg.length; i++){
        storyimg.src =`/uploads/story-icons/${storylistimg[i]}.jpg`;
        storyblock.appendChild(storyimg);
        storyparent.appendChild(storyblock.cloneNode(true));
    }
});

