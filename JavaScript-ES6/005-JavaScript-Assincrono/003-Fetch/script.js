// const cep = fetch("https://viacep.com.br/ws/88134185/json/");

// cep
//   .then((r) => r.json())
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = "CEP: " + body.cep;
//     conteudo.innerText += "\n\nRua: " + body.logradouro;
//     conteudo.innerText += "\n\nBairro: " + body.bairro;
//     conteudo.innerText += "\n\nCidade: " + body.localidade;
//     conteudo.innerText += "\n\nUF: " + body.uf;
//   });

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById("cep");
const btnCep = document.getElementById("btnCep");
const resultadoCep = document.querySelector(".resultadoCep");

btnCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcDisplay = document.querySelector(".btc");

function fetchBtc() {
  fetch(`https://blockchain.info/ticker`)
    .then((response) => response.json())
    .then((btcJson) => {
      btcDisplay.innerText = ("R$ " + btcJson.BRL.buy).replace(".", ",");
    });
}
setInterval(fetchBtc, 30000);
fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const piadaDisplay = document.querySelector(".piadaDisplay");
const btnProxima = document.querySelector(".proxima");

function puxarPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((piada) => {
      piadaDisplay.innerText = "\n" + piada.value;
    });
}

btnProxima.addEventListener("click", puxarPiada);

puxarPiada();
