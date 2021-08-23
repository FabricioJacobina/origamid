const menu = document.querySelector(".menu");
console.log(menu);
menu.classList.add("ativo", "azul"); //Adicionou classe ativo e classe azul.
menu.classList.remove("azul"); //Removeu a classe azul.
menu.classList.toggle("verde"); //verificou se há a classe verde, como não pussie, adicionou a mesma.

if (menu.classList.contains("verde")) {
  menu.classList.add("possuiVerde");
} else {
  menu.classList.add("verde");
}

console.log(menu.classList);

const imgs = document.querySelector("img");
const srcImg = imgs.getAttribute("alt");
imgs.setAttribute("alt", "É uma raposa");
console.log(imgs.getAttribute("src"));
console.log(imgs.getAttribute("alt"));
