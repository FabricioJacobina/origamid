// function somar(a, b) {
//   return a + b;
// }
// somar(4, 2); // 6

// const somar = function (a, b) {
//   return a + b;
// };
// somar(4, 2); // 6

// const quadrado = (a, b) => a * b;
// quadrado(4, 4); // 16

// Remova o erro
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
priceNumber("R$ 99,99");

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function () {
  const nome = "Fabricio";
})();

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

// function active(callback) {
//   return callback();
// }
active(function () {
  console.log("Teste");
});
