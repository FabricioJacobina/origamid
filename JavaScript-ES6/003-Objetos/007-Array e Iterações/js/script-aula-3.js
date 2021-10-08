//[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

const frutas = ["Banana", "Pêra", "Uva", "Maçã"];
const buscaUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
}); // 2

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.find((x) => x > 45); // 88

//[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

const frutas3 = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];
const arrayLimpa = frutas3.filter((fruta) => {
  return fruta;
}); // ['Banana', 'Uva', 'Maçã']

const numeros3 = [6, 43, 22, 88, 101, 29];
const buscaMaior450 = numeros3.filter((x) => x > 45); // [88, 101]

/**
 *
 */

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const aulasMaiores = aulas.filter((aula) => {
  return aula.min > 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
