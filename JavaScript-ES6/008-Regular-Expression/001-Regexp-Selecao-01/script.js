const frase = "JavaScript";
const fraseNova = frase.replace(/J/, "C");

console.log(fraseNova);

const frase1 =
  "O peso e tamanho dos lobos variam muito em todo o mundo, tendendo a aumentar proporcionalmente com a latitude, como previsto pela teoria de Christian Bergmann. Em geral, a altura, medida a partir dos ombros, varia de 60 a 95 centímetros. O peso varia geograficamente. Em média, os lobos europeus pesam 38,5 kg; os lobos da América do Norte, 36 kg; os lobos indianos e árabes, 25 kg";
console.log(frase1.replace(/a/, "e"));
console.log(frase1.replace(/i/g, "u"));
console.log(frase1.replace(/O/gi, " A "));
console.log(frase1.replace(/[ta]/, "u"));

/*
* Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().

* As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.

* Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.

* Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b.

* Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.

* Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.

* O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.

* Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]

* O ponto . irá selecionar qualquer caracter, menos quebras de linha.

* Caracteres especiais como o ponto ., podem ser escapados utilizando a barra \, assim este não terá mais a sua função especial e será tratado como literal. Lista de caracteres especiais: +*?^$\.[]{}()|/

* O \w irá selecionar qualquer caracter alfanumérico e o underline. É a mesma coisa que [A-Za-z0-9_].

* O \W irá selecionar tudo o que não for caracter alfanumérico e o underline. É a mesma coisa que [^A-Za-z0-9_].

* O \d irá selecionar qualquer dígito. É a mesma coisa que [0-9].

* O \D irá selecionar tudo que não for dígito. É a mesma coisa que [^0-9].

* O \s irá selecionar qualquer espaço em branco, isso inclui espaços, tabs, quebra de linhas.

* O \S irá selecionar qualquer caracter que não for espaço em branco.

* É possível selecionar caracteres seguidos, como /bbb/g irá selecionar apenas bbb. Com as chaves podemos indicar a repetição /b{3}/g. Agora ele está fazendo uma seleção completa e não caracter por caracter.

* Podemos informar o min e max do quantificador /a{2,4}/ vai selecionar quando aparecer a duas vezes ou até 4 vezes. /a{2,}/ irá selecionar quando se repetir duas ou mais vezes.

* O sinal de + significa que devemos selecionar quando existir pelo menos uma ou mais ocorrências.

* O sinal * significa que devemos selecionar quando existir 0 ou mais ocorrências.

* O sinal ? significa que o caracter é opcional, pode ou não existir.

* O sinal | irá selecionar um ou outro. java|php

* O sinal \b irá indicar que pretendemos fazer uma seleção que deve ter início e fim de não caracteres \w.

* Com o ^ é possível informar que a busca deve ser iniciada no início da linha.

* Com o $ é possível informar que a busca deve ser iniciada no final da linha.

* Com a flag m de multiline, podemos informar que a busca de início ^ e final $ de linha devem ocorrer em todas as linhas disponíveis.

* O \n irá selecionar o final de uma linha, quando criamos uma nova.

* O \u irá selecionar o respectivo caracter unicode, de acordo com o código passado em \uXXXX. Ex: \u0040 seleciona o @.

*/
