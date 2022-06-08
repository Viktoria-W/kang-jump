const kangaroo = document.getElementById('kangaroo');
const cactus = document.getElementById('cactus');
const button = document.querySelector('button');
let counter = document.getElementById('counter');
let counterValue = 0;

//начало работы от кнопки старт
button.addEventListener('click', () => {
    document.addEventListener('keydown', () => {
        jump()
        count()
    });

    document.addEventListener('touchend', () => {
        jump()
        count()
    });

    button.setAttribute('hidden', 'hidden');
    cactus.style.animation = 'cactusMov 1.5s infinite linear';
})

//очки игры
function count() {
    counterValue += 1;
    counter.innerHTML = counterValue;
}



//Добавление класса jump к кенгуру
function jump() {
    if (kangaroo.classList != "jump") {
        kangaroo.classList.add('jump');
    }

    setTimeout(function () {
        kangaroo.classList.remove('jump');
    }, 400)
};


//получение высоты и кенгуру и кактуса + выведение ошибки при их соприкосновении
let isAlive = setInterval(function () {
    let kangarooTop = parseInt(window.getComputedStyle(kangaroo).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 40 && cactusLeft > 0 && kangarooTop >= 240) {
        alert(`GAME OVER!!! \nТы набрал ${counter.textContent} очка(-ов)`);

        button.removeAttribute('hidden');

        cactus.style.animation = '';

        window.location.reload();
    }

}, 10);