const button = {
  get element() {
    return this._element || 100;
  },
  set element(tipo) {
    this._element = document.createElement(tipo);
  },
};

const valorPI = {
  get PI() {
    return 3.14;
  },
};

const frutas = {
  lista: [],
  set novaFruta(fruta) {
    this.lista.push(fruta);
  },
};
frutas.novaFruta = "Banana";
frutas.novaFruta = "Morango";
frutas.novaFruta = "Pêra";
frutas.novaFruta = "Uva";

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
}

const blueButton = new Button("Comprar", "blue");
blueButton.element; // retorna o elemento
