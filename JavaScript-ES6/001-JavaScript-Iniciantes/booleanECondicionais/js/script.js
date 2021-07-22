// var possuiGraduacao = true;
// var possuiDoutorado = false;

// if (possuiGraduacao) {
//   console.log('Possui Graduação');
// } else {
//   console.log('Não possui Graduação');
// }

// true && true; //true
// true && false; //false
// false && false; //false
// 'Gato' && 'Cão'; // 'Cão'
// (5 - 5) && (5 + 5); //0
// 'Gato' && false; //false
// (5 >= 5) && (3 < 6); //false

// true || true; // true
// true || false; // true
// false || true; // true
// 'Gato' || 'Cão'; // 'Gato'
// (5 - 5) || (5 + 5); // 10
// 'Gato' || false; // Gato
// (5 >= 5) || (3 < 6); // true


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 26;
var idadeEsposa = 28;
if (minhaIdade > idadeEsposa) {
  console.log('é maior');
} else if (minhaIdade === idadeEsposa) {
  console.log('é igual');
} else {
  console.log('é menor');
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (brasil > china) {
  console.log('Brasil tem mais habitantes.');
} else {
  console.log('Brasil tem menos habitantes.');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} //false

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); //Cão
} else {
  console.log('Falso');
}