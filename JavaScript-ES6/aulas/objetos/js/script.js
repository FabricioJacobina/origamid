// var pessoa = {
//   nome: 'Fabricio',
//   idade: 26,
//   profissao: 'Designer',
//   possuiFaculdade: true,
// }
// console.log(pessoa.nome); // 'Fabricio'
// console.log(pessoa.possuiFaculdade); // true


// var quadrado = {
//   lados: 4,
//   area: function (lado) {
//     return lado * lado;
//   },
//   perimetro: function (lado) {
//     return this.lados * lado;
//   },
// }
// quadrado.lados; // 4
// quadrado.area(5); // 25
// quadrado.perimetro(5); // 20

// var quadrado = {
//   lados: 4,
//   area(lado) {
//     return lado * lado;
//   },
//   perimetro(lado) {
//     return this.lados * lado;
//   },
// }

// Math.PI; // 3.14
// Math.random(); // número aleatório

// var pi = Math.PI;
// console.log(pi); // 3.14

// var carro = {};
// var pessoa = {};
// console.log(typeof carro); // 'object'


// var menu = {
//   width: 800,
//   height: 50,
//   backgroundColor: '#84E',
// }
// var bg = menu.backgroundColor; // '#84E'

// var menu = {
//   width: 800,
//   height: 50,
//   backgroundColor: '#84E',
// }
// menu.backgroundColor = '#000';
// console.log(menu.backgroundColor); // '#000'

// var menu = {
//   width: 800,
// }
// menu.height = 50;
// menu.position = 'fixed';

// var height = 120;
// var menu = {
//   width: 800,
//   height: 50,
//   metadeHeight() {
//     return this.height / 2;
//   }
// }
// menu.metadeHeight(); // 25
// // sem o this, seria 60


// var menu = {
//   width: 800,
// }
// menu.hasOwnProperty('width') // true
// menu.hasOwnProperty('height') // false

// // Crie um objeto com os seus dados pessoais
// // Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Fabricio',
  sobrenome: 'Jacobina',
  idade: 26,
  Casado: true,
}


// // Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
}


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};
carro.preco = 3000;


// // Crie um objeto de um cachorro que represente um labrador,
// // preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Late';
    } else {
      return 'Não late';
    }
  }
};