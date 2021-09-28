const ano = 2021;
const numero = new Number(99);

console.log(Number.isNaN(ano));
console.log(Number.isInteger(ano));

const preco = 2.99;
+preco.toFixed(); //3 Tira casa decimal e arredonda o valor

const carro = 1000.455;
+carro.toFixed(2); //1000.46 Deixa duas casas decimais e arredonda o valor

const preco2 = 1499.99;
+preco2.toFixed(); //1500 Tira casas decimais e arredonda o valor

let gasolina = 5.99;
gasolina = gasolina.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
console.log(gasolina);
console.log(Math.PI);

Math.abs(-5.5); // 5.5 Sempre valor positivo
Math.ceil(4.8334); // 5 Arredonda sempre para cima
Math.floor(4.8334); // 4 Arredonda para baixo
Math.round(4.8334); // 5 Arredondamento matemático normal
Math.max(5, 3, 10, 42, 2); // 42 Retorna o maior valor
Math.min(5, 3, 10, 42, 2); // 2 Retorna o menor valor
Math.random(); // 0.XXX Retorna valor aleatório
Math.floor(Math.random() * 100); // Valor aleatório entre 0 e 100
Math.floor(Math.random() * 500); // Valor aleatório entre 0 e 500
Math.floor(Math.random() * (7965 - 34 + 1)) + 34; // Valor aleatório entre 34 e 7965
