// const jetzt = new Date();
// const stunde = jetzt.getHours();

// if (stunde >= 7 && stunde < 17) {
//     document.querySelector('.greeting').textContent = 'a software dev';
// } else {
//     document.querySelector('.greeting').textContent = 'having fun!';
// }

// footer datum setzen
const yearNow = new Date();
const yearDate = yearNow.getFullYear().toString();
document.getElementById("footerDate").innerText = yearDate;
