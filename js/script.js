console.log("Wedding Invitation Loaded");

const openBtn = document.getElementById("openBtn");
const hero = document.getElementById("hero");

if (openBtn && hero) {
    openBtn.addEventListener("click", () => {

        const welcome = document.getElementById("welcome");

        if (welcome) {
            welcome.style.display = "none";
        }

        hero.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

const weddingDate = new Date("2026-12-14T18:00:00");

function updateCountdown() {

    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    const now = new Date();

    const diff = weddingDate - now;

    if (diff <= 0) {
        countdown.innerHTML = "Today is the Wedding Day";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    countdown.innerHTML =
        days + " Days Remaining";
}

updateCountdown();

const music = document.getElementById("music");
const musicToggle = document.getElementById("musicToggle");

if (music && musicToggle) {

    musicToggle.addEventListener("click", () => {

        if (music.paused) {
            music.play();
            musicToggle.innerHTML = "🔊";
        } else {
            music.pause();
            musicToggle.innerHTML = "🔇";
        }

    });

}
