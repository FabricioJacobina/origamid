function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
Pessoa.prototype.andar = function () {
  return this.nome + " tem " + this.idade + " anos e está caminhando.";
};

Pessoa.prototype.nadar = function () {
  return this.nome + " tem " + this.idade + " anos e está nadando.";
};

const andre = new Pessoa("André", 28);
console.log(Pessoa.prototype);
console.log(andre.prototype);
