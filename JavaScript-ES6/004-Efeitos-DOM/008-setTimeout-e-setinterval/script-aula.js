// function espera(texto) {
//   console.log(texto);
// }
// setTimeout(espera, 1000, "Depois de 1s");

// setTimeout(() => {
//   console.log("Após 0s?");
// });

// // for (let i = 0; i < 20; i++) {
// //   setTimeout(() => {
// //     console.log(i);
// //   }, 300);
// // }

// for (let i = 0; i < 20; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 300 * i);
// }

// const btn = document.querySelector("button");
// btn.addEventListener("click", handleClick);

// // this agora é btn.
// function handleClick(event) {
//   setTimeout(() => {
//     this.classList.toggle("active");
//   }, 1000);
// }

function loop(texto) {
  console.log(texto);
}
setInterval(loop, 1000, "Passou 1s");

// loop a cada segundo
let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++);
  if (i > 20) {
    clearInterval(meuLoop);
  }
}, 300);
