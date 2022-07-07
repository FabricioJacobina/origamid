function createButton(text) {
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }
  return Object.freeze({
    element,
    text,
  });
}

const comprarBtn = createButton("Comprar");

function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou.`;
  }
  function nadar() {
    return `${nomeCompleto} nadou.`;
  }
  return {
    nome,
    sobrenome,
    andar,
    nadar,
  };
}
const desenvolvedor = criarPessoa("Fabrício", "Jacobina");

function Pessoa(nome) {
  if (!(this instanceof Pessoa))
    // ou (!new.target)
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

const designer = Pessoa("Fabricio");
