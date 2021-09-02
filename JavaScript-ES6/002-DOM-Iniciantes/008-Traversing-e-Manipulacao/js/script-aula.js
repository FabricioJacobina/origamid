const h1 = document.querySelector('h1');
h1.innerText = ' Animais Normais';
h1.innerHTML += '<p> ❍</p>';

const lista = document.querySelector('.animais-lista');
console.log(lista);
console.log(lista.parentElement); //pai
console.log(lista.parentElement.parentElement); //pai do pai
console.log(lista.parentElement.parentElement.parentElement);
console.log(lista.nextElementSibling); //proximo elemento
console.log(lista.previousElementSibling); // elemento anterior

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

//lista.appendChild(titulo); // Move titulo para o final da lista.

contato.insertBefore(animais, titulo); // Insere a lista antes do titulo.

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('novoTitulo');
mapa.appendChild(novoH1);

const faq = document.querySelector('.faq');
const cloneH1 = h1.cloneNode(true);
cloneH1.classList.add('azul');

faq.appendChild(cloneH1);
