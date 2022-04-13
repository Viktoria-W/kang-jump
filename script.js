const kangaroo = document.getElementById('kangaroo');
const cactus = document.getElementById('cactus');

document.addEventListener("keydown", function(event) {
    jump()
});
//Добавление класса jump к кенгуру
function jump () {
    if(kangaroo.classList != "jump") {
        kangaroo.classList.add('jump');
    }
    setTimeout( function() {
        kangaroo.classList.remove('jump');
    }, 400)
};
//получение высоты и кенгуру и кактуса + выведение ошибки при их соприкосновении
let isAlive = setInterval ( function () {
    let kangarooTop = parseInt(window.getComputedStyle(kangaroo).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 50 && cactusLeft > 0 && kangarooTop >= 240) {
        alert('GAME OVER!!!');
    }
}, 10);