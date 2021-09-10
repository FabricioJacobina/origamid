function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}
const honda = new Carro();
honda.marca = "Honda";
honda.preco = 9000;

const fiat = new Carro();
fiat.marca = "fiat";
fiat.preco = 7800;

const chevrolet = new Carro("Chevrolet", 3000);

const renault = new Carro();
// Cria um novo objeto
renault = {};
// Define o protótipo
renault.prototype = Carro.prototype;
// Aponta a variável this para o objeto
this = renault
// Executa a função, substituindo this pelo objeto
renault.marca = "Renault";
renault.preco = 5000;
// Retorna o novo objeto
return (renault = {
  marca: "Renault",
  preco: 5000,
});
