console.log("Wedding invitation loaded");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicToggle");

if (music && musicBtn) {
    musicBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            musicBtn.textContent = "🔊";
        } else {
            music.pause();
            musicBtn.textContent = "🔇";
        }
    });
}

function updateCountdown() {

    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    const weddingDate = new Date("2026-12-14T18:00:00");
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
