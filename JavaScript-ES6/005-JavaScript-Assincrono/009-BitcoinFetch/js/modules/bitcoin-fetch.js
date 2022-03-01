export default function initBitcoinFetch() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcJson) => {
      const btc = document.querySelector(".btc-preco");
      btc.innerText = (100 / btcJson.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
