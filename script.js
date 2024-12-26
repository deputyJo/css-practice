const cardGrid = document.getElementById("card-grid");
const likeCount = document.getElementById("like-count");
let counter = 0;

//Main logic

cardGrid.addEventListener("click", (event) => {

    //button logic
    if (event.target.classList.contains("like-button")) {

        //toggle button text
        toggleButtonText(event.target, "Like", "Liked");
    }
});


//Functions

//Button

//toggle button text
function toggleButtonText(target, text1, text2) {
    target.textContent = target.textContent === text1 ? text2 : text1;

    //set the element's attribute
    setElementsAtribbute(target, "isLiked", text1, "notLiked", "liked");

    //update and display the likes counter
    updateAndDisplayLikesCounter(target, "isLiked", "notLiked");
}

//set the element's attribute
function setElementsAtribbute(target, key, comparedValue, valueOption1, valueOption2) {
    target.setAttribute(key, target.textContent === comparedValue ? valueOption1 : valueOption2)
}


//update and display the likes counter
function updateAndDisplayLikesCounter(target, getValue, comparedValue) {
    likeCount.textContent = target.getAttribute(getValue) === comparedValue ? --counter : ++counter;
}

