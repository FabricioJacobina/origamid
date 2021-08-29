// Quando o usuário clicar nos links internos do site, adicione a classe ativo no item clicado e remva dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links.
const linkInterno = document.querySelectorAll("a[href^='#']");

function handleLink(event){
  event.preventDefault();
  linkInterno.forEach((link) => link.classList.remove('ativo'));
  event.currentTarget.classList.add('ativo');
}

linkInterno.forEach((link) => {
  link.addEventListener('click', handleLink);
})

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados.
// const todosElementos = document.querySelectorAll('body *');

// function handleElemento(event){
//   console.log(event.currentTarget);
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', handleElemento);
// })

// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento
// const todosElementos = document.querySelectorAll('body *');

// function handleElemento(event){
//   event.currentTarget.remove();
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener('click', handleElemento);
// })

// Se o usuário clicar na tela (t), aumente todo o texto do site.
function hancleClickT(event){
  console.log(event.key);
  if(event.key === 't'){
    document.documentElement.classList.toggle('textoMaior');
  }
}

window.addEventListener('keydown', hancleClickT);