var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") { 
        jump();
    }
});

var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("DEFEAT");
    }
}, 10);
