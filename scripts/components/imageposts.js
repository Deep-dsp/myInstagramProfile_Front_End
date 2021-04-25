// This component -> displaying posts on load,
// random like nad comment counts, (random image order)

const postcon = document.querySelector('.tab-issue-solver');
const post = postcon.querySelector('.post-container');
const postimg = post.querySelector('img');

// Like count
const likeconfirst = document.querySelector('.like-comment-con');
const firstlike = likeconfirst.querySelector('.like p');
// Comment count
const commentval = likeconfirst.querySelector('.comment p');
console.log(commentval);


// List of posts
const postlist = ["136669390_425875312093233_3025457713389608371_n", "137304733_746913602601551_4002666236453792058_n", "139469851_1090148494834583_5939736627068666381_n", "141133570_1063204750863089_715432850083682244_n", "142116121_517630632550066_6523820258129454437_n", "143540504_270108397790344_5116628483225644169_n", "144007665_249375823458536_106881166673130857_n", "146089109_262662968552919_5935619820302556320_n", "147063917_862981881153242_2048379424703025599_n", "147121469_101290888608361_3140544320035805870_n", "147390513_898825713991437_7499585302640991011_n", "149531254_278087553666748_7821420576907287875_n", "149862408_4109737982391187_878376174714887001_n", "149943653_234350001665293_4708603956858728219_n", "150438975_700325643982986_7857172496936033925_n", "151139946_2553676074941324_2209167278594978968_n", "152133125_140530864516032_8435437142206466602_n", "153113503_128351079121260_2019388504824871018_n", "154942672_493460265344536_651300079101479921_n", "155175797_221830272974775_8860676481135206204_n", "155259245_775297983087652_1267663785828455174_n"];

window.addEventListener("load", ()=>{
    // Shuffle Image Posts
    var currentIndex = postlist.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = postlist[currentIndex];
        postlist[currentIndex] = postlist[randomIndex];
        postlist[randomIndex] = temporaryValue;
    }

    for(let i=0; i< postlist.length; i++){
        postimg.src = `/uploads/posts/${postlist[i]}.jpg`;
        firstlike.innerText = randomnogeneration(20, 15);
        commentval.innerText = randomnogeneration(30, 25);
        postcon.appendChild(post.cloneNode(true));
    }
});

// Random like-comment-counts generator function
function randomnogeneration(max, min){
    return Math.floor(Math.random() * (max - min) * min);
}
