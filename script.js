const player = document.getElementById("player");
console.log("player")
let playerx = 0;
document.addEventListener('keydown', event => {
    const key = event.key;
    console.log("original: " + playerx.toString())
    if (key === 'a') {
        playerx -= 1
    }
    else if (key === 'd') {
        playerx += 1
    }
    console.log("key: " + key)
    console.log("new: " + playerx.toString())
    draw(player)
})
function draw(player) {
    player.style.left = playerx.toString() + "px"
}
