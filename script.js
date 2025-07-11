// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if(bar){
    bar.addEventListener("click" , () =>{
        nav.classList.add("active");
    })
}

if(close){
    close.addEventListener("click" , () =>{
        nav.classList.remove("active");
    })
}


// sproduct switch image

var MainImg = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function() {
    MainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function() {
    MainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function() {
    MainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function() {
    MainImg.src = smallImg[3].src;
}



// card enrty number
  
function total_card_entry_fun() {
    event.preventDefault(); // Prevents the page from scrolling to the top
    const totalCartEntry = document.getElementById("total-card-entry");
    // Get the current value, or start from 0 if it's empty
    let currentValue = parseInt(totalCartEntry.textContent) || 0;
    // Increment the value by 1

    totalCartEntry.textContent = currentValue + 1;

    localStorage.setItem("cartCounter", currentValue + 1);
}
