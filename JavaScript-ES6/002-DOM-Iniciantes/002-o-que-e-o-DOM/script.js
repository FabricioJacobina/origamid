//window.alert('Estudando DOM');

const href = window.location.href;

console.log(href);
if (
  href === "http://127.0.0.1:5500/002-DOM-Iniciantes/o-que-e-o-DOM/index.html"
) {
  console.log("O endereço é igual!");
}
const titulo = document.querySelector(".titulo");

// Retorne a url da página atual utilizando o objeto window
console.log(`A url da página é ${window.location.href}`);

// Seleciona o primeiro elemento da página que possua a classe ativo
console.log(window.document.querySelector(".ativo"));

// Retorna a linguagem do navegador
console.log(
  `O navegador está utilizando a linguagem ${window.navigator.language}`
);

// Retorna a largura da janela
console.log(` A largura atual da janela é de ${window.innerWidth}px `);
