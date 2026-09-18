const openBtn = document.getEle*entById("openBtn");
const hero = d*cument.getElementById("hero");

openBtn.addEventListener("click", () => {

document.getElementById("welcome").style.display = "none";

hero.classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const weddingDate = new Date("2026-12-14T18:00:00");

function updateCountdown() {

const now = new Date();

const diff = weddingDate - now;

if(diff <= 0){
document.getElementById("countdown").innerHTML =
"Today is the Wedding Day";
return;
}

const days =
Math.floor(diff / (1000 * 60 * 60 * 24));

const hours =
Math.floor((diff / (1000 * 60 * 60)) % 24);

const minutes =
Math.floor((diff / (1000 * 60)) % 60);

document.getElementById("countdown").innerHTML =
`${days} Days ${hours} Hours ${minutes} Minutes`;

}

setInterval(updateCountdown,1000);

updateCountdown();

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicToggle");

musicBtn.addEventListener("click", () => {

if(music.paused){

music.play();
musicBtn.innerHTML = "🔊";

}else{

music.pause();
musicBtn.innerHTML = "🔇";

}

});
