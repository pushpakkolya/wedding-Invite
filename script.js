const targetDate = new Date("July 5, 2026 11:00:00").getTime();

function updateUnit(id, value) {
  const el = document.getElementById(id);
  const card = el.querySelector(".card");

  const top = card.querySelector(".top");
  const bottom = card.querySelector(".bottom");
  const flipTop = card.querySelector(".flip-top");
  const flipBottom = card.querySelector(".flip-bottom");

  const current = top.innerText;

  if (value === current) return;

  // Set animation values
  flipTop.innerText = current;
  flipBottom.innerText = value;

  el.classList.add("animate");

  // 🔥 CHANGE VALUE EXACTLY MID-FLIP
  setTimeout(() => {
    top.innerText = value;
  }, 200);

  setTimeout(() => {
    bottom.innerText = value;
    el.classList.remove("animate");
  }, 400);
}

function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  const d = String(Math.floor(gap / (1000*60*60*24))).padStart(2,'0');
  const h = String(Math.floor((gap/(1000*60*60))%24)).padStart(2,'0');
  const m = String(Math.floor((gap/(1000*60))%60)).padStart(2,'0');
  const s = String(Math.floor((gap/1000)%60)).padStart(2,'0');

  updateUnit("days", d);
  updateUnit("hours", h);
  updateUnit("minutes", m);
  updateUnit("seconds", s);
}

setInterval(updateCountdown, 1000);
updateCountdown();
