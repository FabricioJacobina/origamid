// Liste cinco objetos nativos
Object;
String;
Array;
Function;
Number;

// liste cinco objetos do browser
Window;
history;
Document;
HTMLAllCollection;
NodeList;

// liste dois métodos, Propriedades ou objetos presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== "undefined") {
  console.log("existe");
} else {
  console.log("Não existe");
}
if (typeof document.webkitExitFullscreen !== "undefined") {
  console.log("existe");
} else {
  console.log("Não existe");
}
