let count = parseInt(localStorage.getItem("smokeCount")) || 0;
const counter = document.getElementById("counter");

function updateCounter() {
  counter.textContent = count;
  localStorage.setItem("smokeCount", count);
}

document.getElementById("addBtn").addEventListener("click", () => {
  count++;
  updateCounter();
});

document.getElementById("minusBtn").addEventListener("click", () => {
  if (count > 0) count--;
  updateCounter();
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  updateCounter();
});

updateCounter();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
