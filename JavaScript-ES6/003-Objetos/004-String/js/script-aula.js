const comida = "Pizza";
const liquido = new String("Água");
const ano = new String(2018);

const fruta = "Banana";
const ListaFrutas = "Melancia, Banana, Laranja, Uva, Maça, Manga, Abacaxi";

console.log(ListaFrutas.includes(fruta));
console.log(fruta.includes(ListaFrutas));

console.log(fruta.startsWith("Ba")); //Começa com ...
console.log(fruta.endsWith("na")); //Termina com ...

if (fruta.endsWith("na")) {
  console.log("Correto");
} else {
  console.log("Incorreto");
}

let listaItens = "Camisas bonés Calças Bermudas Vestidos Saias";
listaItens = listaItens.replace(/[ ]+/g, ", ");
console.log(listaItens);

const arrayLista = listaItens.split(", "); //Transforma a lista em Array
console.log(arrayLista);
