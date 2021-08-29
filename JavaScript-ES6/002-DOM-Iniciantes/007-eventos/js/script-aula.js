const img = document.querySelector('img');

function callback(){
  console.log('Clicou na raposa.');
}

function callback(event){
  console.log(event);
}

img.addEventListener('click', callback);

img.addEventListener('click', () => {
  console.log('Clicou na imagem.');
})

const imgs = document.querySelectorAll('img');

function imgSrc(event){
  console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
})