// Hämta element
const placeToPutCountDown = document.getElementById("placeToPutCountDown");
const placeForTime = document.getElementById("placeForTime");

// Examensdatum
const examensDatum = new Date("September 6, 2023 17:00:00").getTime();

const x = setInterval(function () {
  // Hämta dagens datum
  let dagensDatum = new Date().getTime();

  // Skillnad mellan dagens datum och examensdatum
  let countDown = examensDatum - dagensDatum;

  // Räkna fram dagar, timmar, minuter och sekunder
  let dagar = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let timmar = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minuter = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let sekunder = Math.floor((countDown % (1000 * 60)) / 1000);

  // Visa nedräkning i paragrafen
  placeForTime.innerHTML = dagar + "d " + timmar + "h " + minuter + "m " + sekunder + "s ";
}, 1000);
