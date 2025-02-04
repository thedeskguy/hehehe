function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";

}
const moverandom = document.querySelector("#move-random");
moverandom.addEventListener("mouseenter", function
    (e) {
    moveRandomEl(e.target);
})