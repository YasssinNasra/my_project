function change_color(color) {
    document.body.style.backgroundColor = color;
}

const but = document.querySelector(".change_color");
but.textContent = "Change background Color";
but.onclick = function() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    change_color(`rgb(${r},${g},${b})`);
};