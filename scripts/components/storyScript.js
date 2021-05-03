// This Component is used to
// display saved story and shuffle them

// Declarations
const storyparent = document.querySelector('.story-block');
const storyblock = document.querySelector('.story');
const storyimg = storyblock.querySelector('img');
const storyname = storyblock.querySelector('p');
const storylistimg = ["1", "2","3","4","5","6","7"];
const storylist = ["Micro Photo", "Venom", "River", "Grass", "Sketch", "ProfundoFX", "Game Project"];


// Display stories on load
window.addEventListener("load", ()=>{

    // shuffle stories
    var currentIndex = storylistimg.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = storylistimg[currentIndex];
        storylistimg[currentIndex] = storylistimg[randomIndex];
        storylistimg[randomIndex] = temporaryValue;

        // name
        temporaryValue = storylist[currentIndex];
        storylist[currentIndex] = storylist[randomIndex];
        storylist[randomIndex] = temporaryValue;
    }
    
    // used Clone Node to clone container = No. of array items -> Display Them.
    for(let i=0; i<storylistimg.length; i++){
        storyimg.src =`/uploads/story-icons/${storylistimg[i]}.jpg`;
        storyname.innerText = `${storylist[i]}`;
        storyparent.appendChild(storyblock.cloneNode(true));
    }
});

