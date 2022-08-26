const frase = "JavaScript";
const fraseNova = frase.replace(/J/, "C");

console.log(fraseNova);

const frase1 =
  "O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude, como previsto pela teoria de Christian Bergmann. Em geral, a altura, medida a partir dos ombros, varia de 60 a 95 centímetros. O peso varia geograficamente. Em média, os lobos europeus pesam 38,5 kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes, 25 kg";
console.log(frase1.replace(/a/, "e"));
console.log(frase1.replace(/i/g, "u"));
console.log(frase1.replace(/O/gi, " A "));
console.log(frase1.replace(/[ta]/, "u"));
