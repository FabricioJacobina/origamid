const listaAnimais = document.querySelector(".animais-lista");
console.log(listaAnimais.clientHeight);

const altura = listaAnimais.scrollHeight;
console.log(altura);

const animaisTopo = listaAnimais.offsetTop;
console.log(`A autura do elemento com o topo da página é de "${animaisTopo}px"`);

const animaisLeft = listaAnimais.offsetLeft;
console.log(`A distância entre o elemento e o canto esquerdo da página é de "${animaisLeft}px"`);

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset
);