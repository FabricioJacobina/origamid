// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativo() {
//     this.element().classList.add("ativo");
//   },
// };

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativo = function () {
    this.element().classList.add("ativo");
  };
}

const li = new Dom("li");
const ul = new Dom("ul");
const ultimoLi = new Dom("li:last-child");
const parLi = new Dom("li:nth-child(even)");
