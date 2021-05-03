// This component -> displaying posts on load,
// random like and comment counts, (random image order)

// declaration
const postcon = document.querySelector('.tab-issue-solver');
const post = postcon.querySelector('.post-container');
const postimg = post.querySelector('img');

// Like count
const likeconfirst = document.querySelector('.like-comment-con');
const firstlike = likeconfirst.querySelector('.like p');

// Comment count
const commentval = likeconfirst.querySelector('.comment p');

// List of posts
const postlist = ["1", "2","3","4","5","6","7", "9","10","11","12","13","14","15","16", "17","18","19","20","21","22"];

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
        firstlike.innerText = randomnogeneration(30, 25);
        commentval.innerText = randomnogeneration(20, 15);
        postcon.appendChild(post.cloneNode(true));
    }
});

// Random like-comment-counts generator function
function randomnogeneration(max, min){
    return Math.floor(Math.random() * (max - min) * min);
}
