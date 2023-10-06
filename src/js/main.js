// const jetzt = new Date();
// const stunde = jetzt.getHours();

// if (stunde >= 7 && stunde < 17) {
//     document.querySelector('.greeting').textContent = 'a software dev';
// } else {
//     document.querySelector('.greeting').textContent = 'having fun!';
// }

// solarsystem animate
const solarSystemImage = document.querySelector('.solarsystem');
let rotatingDegrees = 360;
solarSystemImage.style.transform = `rotate(${rotatingDegrees}deg)`;

function rotateSolarSystem() {
  rotatingDegrees += 1;
  solarSystemImage.style.transform = `rotate(${rotatingDegrees}deg)`;
}

setInterval(rotateSolarSystem, 50);