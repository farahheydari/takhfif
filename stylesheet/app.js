const endDate = new Date("Aug 10, 2025 23:59:59").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownTimerDiv = document.getElementById("countdown-timer");
const expiredMessageP = document.getElementById("expired-message");

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function updateCountdown() {
    const now = new Date().getTime(); 
    const timeLeft = endDate - now; 

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        countdownTimerDiv.classList.add("hidden"); 
        expiredMessageP.classList.remove("hidden");
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    ///1000عدد  میلی ثانیه هست

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();
