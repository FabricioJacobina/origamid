// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll("img");
console.log(imagens);

// Retorne no console apenas as imagens que começam com a palavra imagem

const img = document.querySelectorAll("img[src^='img/imagem']");
console.log(img);

// Selecione todos os links internos

const linksInternos = document.querySelectorAll("[href^='#']");
console.log(linksInternos);

// Selecione  primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

// Selecione o último p do site

const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[--ultimoP.length]);
