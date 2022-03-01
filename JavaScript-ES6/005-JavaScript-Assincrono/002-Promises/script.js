const promesa = new Promise(function (resolve, reject) {
  let condicao = 1;
  if (condicao) {
    setTimeout(() => {
      resolve("Estou pronto!");
    }, 1000);
  } else {
    reject(Error("Aconteceu um erro na Promise! Favor verificar."));
  }
});

promesa.then((resolucao) => console.log(resolucao));
