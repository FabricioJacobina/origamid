// const imgs = document.querySelectorAll("img");
// imgs.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

// const titulos = document.getElementsByClassName("titulo");
// const titulosArray = Array.from(titulos);
// titulosArray.forEach(function (item) {
//   console.log(item);
// });

// const imgs = document.querySelectorAll("img");
// imgs.forEach((item) => {
//   console.log(item);
// });
// imgs.forEach((item) => console.log(item));

// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll("p");
paragrafos.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => console.log(item.innerText));

// Como corrir os erros abaixo:
// const imgs = document.querySelectorAll('img');
// imgs.forEach(item, index => {
//   console.log(item, index);
// });
// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });
// imgs.forEach(() => i++);

const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
