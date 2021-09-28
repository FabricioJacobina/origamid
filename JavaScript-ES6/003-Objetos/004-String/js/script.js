// Utilizando o foreach na array abaixo,
// some os valores de taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: "Taxa do pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;

transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace("R$ ", "");
  if (item.descricao.slice(0, 4) === "Taxa") {
    taxaTotal += numeroLimpo;
  } else {
    recebimentoTotal += numeroLimpo;
  }
});
console.log(`O valor somado das taxas é de R$: ${taxaTotal},00`);

console.log(`O valor somado de Recebimento é de R$: ${recebimentoTotal},00`);
/* */

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransportes = transportes.split(";");
console.log(arrayTransportes);

// Substitua todos os span's por a's
let html = `<ul>
              <li><span>Sobre</span></li>
              <li><span>Produtos</span></li>
              <li><span>Contato</span></li>
            </ul>`;
//html = html.replace(/[span]+/g, "a");
html = html.split("span").join("a");
console.log(html);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
//console.log(frase.slice(-1));
console.log(frase[frase.length - 1]);

//Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "  TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let totalTaxa = 0;
transacoes2.forEach((item) => {
  item = item.trim().toLowerCase();
  if (item.slice(0, 4) === "taxa") {
    totalTaxa++;
  }
});
console.log(`Há um total de ${totalTaxa} taxas.`);
