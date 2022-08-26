const regexp = /\w+/gi;

// Se passarmos uma string, não precisamos dos //
// e devemos utilizar \\ para meta characters, pois é necessário
// escapar a \ especial. As Flags são o segundo argumento
const regexpObj1 = new RegExp("\\w+", "gi");
const regexpObj2 = new RegExp(/\w+/, "gi");

"JavaScript Linguagem 101".replace(regexpObj1, "X");
// X X X

// Exemplo complexo:
const regexpTELEFONE1 =
  /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp(
  "(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}",
  "g"
);
console.log(regexp.flags);
console.log(regexp.global);
console.log(regexp.ignoreCase);
console.log(regexp.multiline);
console.log(regexp.source);

const regexpJava = /Java/gi;
const frase = "JavaScript e Java";

let i = 1;
while (regexpJava.test(frase)) {
  console.log(
    `${i++}º ${regexpJava.source} encontrado no index: ${regexpJava.lastIndex}`
  );
}

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;
const regexpTags = /(?<=<\/?)\w+/g;

const resultado = tags.replace(regexpTags, "div");

console.log(resultado);
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const resultadoEmail = emails.replace(/(\w+@)[\w.]+/g, "$1gmail.com");

console.log(resultadoEmail);
// empresa@gmail.com
// contato@gmail.com
// suporte@gmail.com
