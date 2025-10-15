
function startHourTimer() {
  let minutes = 60;
  const display = document.getElementById("hourTimerDisplay");
  const message = document.getElementById("hourMessage");

  const interval = setInterval(() => {
    minutes--;
    display.textContent = `${minutes.toString().padStart(2, "0")}:00`;

    if (minutes === 30) {
      message.textContent = "Залишилось менше половини часу!";
    }

    if (minutes === 0) {
      clearInterval(interval);
      message.textContent = "Час вийшов!";
    }
  }, 60000); 
}


function startSecondTimer() {
  const display = document.getElementById("secondTimerDisplay");
  const animationBox = document.getElementById("animationBox");
  const startBtn = document.getElementById("startSecondTimerBtn");

  let time = 30000; 

  startBtn.disabled = true;
  animationBox.style.display = "none";

  const interval = setInterval(() => {
    time -= 10;
    display.textContent = (time / 1000).toFixed(3);

    if (time <= 10000) {
      animationBox.style.display = "block";
    }

    if (time <= 0) {
      clearInterval(interval);
      display.textContent = "0.000";
      animationBox.style.display = "none";
      startBtn.disabled = false;
    }
  }, 10); 
}
