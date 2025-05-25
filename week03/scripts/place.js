const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");

const today = new Date();
yearSpan.textContent = today.getFullYear();
lastModifiedSpan.textContent = document.lastModified;

const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const chillSpan = document.getElementById("chill");

function calculateWindChill(t, s) {
  return (
    13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

if (temp <= 10 && speed > 4.8) {
  chillSpan.textContent = `${calculateWindChill(temp, speed)} °C`;
} else {
  chillSpan.textContent = "N/A";
}
