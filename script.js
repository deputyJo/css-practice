const likeCountDisplay = document.getElementById("like-count");
const likeButton = document.querySelectorAll(".like-button");
let totalLikes = 0;


likeButton.forEach(button => {
    button.addEventListener("click", () => {
        let isLiked = button.classList.toggle("liked");

        button.setAttribute("aria-pressed", isLiked);

        button.textContent = isLiked ? "Liked" : "Like";

        totalLikes = Math.max(0, totalLikes + (isLiked ? 1 : -1));

        likeCountDisplay.textContent = totalLikes;

    });
});

