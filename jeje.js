const btn = document.getElementById("openGift");

const photos = [
    document.querySelector(".photo1"),
    document.querySelector(".photo2"),
    document.querySelector(".photo3"),
];

const sound = new Audio("img/camera-sound.MP3");

let current = 0;

btn.addEventListener("click", () => {

    sound.play();

    btn.style.display = "none";
    showNextPhoto();
});

function showNextPhoto(){

    if(current >= photos.length) return;

    const startTop =
        window.innerWidth <= 768 ? 120 : 170;

    const moveDistance =
        window.innerWidth <= 768 ? 105 : 140;

    for(let i = 0; i < current; i++){

        let currentTop =
            parseInt(photos[i].style.top || startTop);

        photos[i].style.top =
            (currentTop + moveDistance) + "px";
    }

    photos[current].classList.add("show");

    current++;

    if(current < photos.length){
        setTimeout(showNextPhoto, 1000);
    }

}
const text = "Angelo";
const typingEl = document.getElementById("typing");

let i = 0;
let isDeleting = false;

function typeLoop() {
    if (!isDeleting) {
        typingEl.textContent = text.substring(0, i + 1);
        i++;

        if (i === text.length) {
            isDeleting = true;
            setTimeout(typeLoop, 1000);
            return;
        }
    } else {
        typingEl.textContent = text.substring(0, i - 1);
        i--;

        if (i === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeLoop, isDeleting ? 80 : 120);
}

typeLoop();

const candleBtn = document.getElementById("candleBtn");
const flame = document.getElementById("flame");

let candleOn = true;

candleBtn.addEventListener("click", () => {

    candleOn = !candleOn;

    if(candleOn){
        flame.style.display = "block";
        candleBtn.textContent = "Turn Off Candle";

        candleBtn.classList.remove("off");
        candleBtn.classList.add("on");

    }else{
        flame.style.display = "none";
        candleBtn.textContent = "Turn On Candle";

        candleBtn.classList.remove("on");
        candleBtn.classList.add("off");
    }

});
const musicBtn = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if(!isPlaying){
        bgMusic.play();
        musicBtn.textContent = "🔊 Music On";
        musicBtn.classList.remove("off");
    } else {
        bgMusic.pause();
        musicBtn.textContent = "🔇 Music Off";
        musicBtn.classList.add("off");
    }
    isPlaying = !isPlaying;
});
