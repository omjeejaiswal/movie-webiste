const arrow = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list"); 

arrow.forEach((arrow,i)=>{
    arrow.addEventListener("click",()=>{
        console.log(movieLists[i])
    })
})