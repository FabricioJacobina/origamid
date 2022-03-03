// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function () {
//   const buttonElement = document.createElement("button");
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// };

/*******************/

class Button {
  constructor(text, background, color, cursor) {
    this.text = text;
    this.background = background;
    this.color = color;
    this.cursor = cursor;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    buttonElement.style.cursor = this.cursor;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
  static blueButton(text) {
    return new Button(text, "blue", "white", "pointer");
  }
}

const botaoAzul = Button.blueButton("Comprar");
console.log(botaoAzul.appendTo("body"));

// const blueButton = new Button("compre Agora", "blue", "white", "pointer");

/************** */

// const blueButton = new Button("Comprar Agora", "Blue", "white", "pointer");
// console.log(blueButton.appendTo("body"));

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
// }

// const blueButton = new Button({
//   text: "Comprar Agora",
//   bacground: "blue",
//   color: "white",
//   cursor: "pointer",
// });
