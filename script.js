const kangaroo = document.getElementById('kangaroo');
const cactus = document.getElementById('cactus');
const button = document.querySelector('button');
let counter = document.getElementById('counter');
const round = document.querySelector('.game__round');
const win = document.querySelector('.game__winner');
let counterValue = 0;


win.setAttribute('hidden', 'true');
round.setAttribute('hidden', 'true');



//начало работы от кнопки старт
button.addEventListener('click', () => {
    document.addEventListener('keydown', () => {
        jump()

    });

    document.addEventListener('touchend', () => {
        jump()
    });


    //скрываем кнопку,вкл звук
    button.setAttribute('hidden', 'true');
    musicPlay();


    roundFirst();
    setTimeout(winner, 5000);

    setTimeout(roundSecond, 7000);
    setTimeout(winner, 12000);

    setTimeout(roundThird, 14000);
    setTimeout(winner, 19000);

    setTimeout(roundFourth, 21000);
})

//музыка 
function musicPlay() {
    const gameAudio = new Audio('audio/bgr-audio.mp3');
    gameAudio.setAttribute('loop', 'loop');
    gameAudio.play();
}


//первый раунд
function roundFirst() {
    cactus.style.animation = 'cactusMov 1.5s infinite linear';
}

//второй раунд
function roundSecond() {
    round.setAttribute('hidden', 'true');

    cactus.style.animation = 'cactusMov 1.0s infinite linear';
}

//третий раунд
function roundThird() {
    round.setAttribute('hidden', 'true');

    cactus.style.animation = 'cactusMov 0.8s infinite linear';
}

//четвертый раунд
function roundFourth() {
    round.setAttribute('hidden', 'true');

    cactus.style.animation = 'cactusMov 0.6s infinite linear';
    setInterval(function () {
        cactus.style.animation = '';
        win.removeAttribute('hidden');
    }, 5000);
}


//время
function winner() {
    cactus.style.animation = '';
    round.removeAttribute('hidden');
}

//очки игры
function count() {
    counterValue += 1;
    counter.innerHTML = counterValue;
}

//прыжок кенгуру
function jump() {
    const jumpAudio = new Audio('audio/jump.mp3');
    jumpAudio.play();

    if (kangaroo.classList != "jump") {
        kangaroo.classList.add('jump');
    }

    setTimeout(function () {
        kangaroo.classList.remove('jump');
    }, 400)
};


//получение высоты и кенгуру и кактуса + выведение ошибки при их соприкосновении
let isAlive = setInterval(function () {
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    let kangarooTop = parseInt(window.getComputedStyle(kangaroo).getPropertyValue("top"));

    if (cactusLeft < 40 && cactusLeft > 0 && kangarooTop >= 240) {
        alert(`GAME OVER!!! \nТы набрал ${counter.textContent} очка(-ов)`);

        button.removeAttribute('hidden');

        cactus.style.animation = '';

        window.location.reload();
    }

    if (cactusLeft == 0) {
        count()
    }
}, 10);

