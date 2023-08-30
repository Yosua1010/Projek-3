let friendCount = 2;

function follow(button) {
    friendCount++;
    document.getElementById("friendCount").textContent = friendCount;
    button.classList.remove("h");
    button.classList.add("y");
    button.textContent = "Unfollow";
}

function unfollow(button) {
    if (friendCount > 0) {
        friendCount--;
        document.getElementById("friendCount").textContent = friendCount;
        button.classList.remove("y");
        button.classList.add("h");
        button.textContent = "Follow";
    }
}