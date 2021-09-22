const pais = "brasil";
const cidade = new String("Florianópolis");
console.log(cidade.charAt(0));
console.log(pais.charAt(0));
console.log(pais.toUpperCase());

const listaAnimais = ["cachorro", "gato", "cavalo"];

const lista = document.querySelectorAll("li");
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
