import Countdown from "./countdown.js";

const natal = document.querySelector(".natal");

const diasNatal = new Countdown("25 December 2022 00:00:00 GMT-0300");
const diasAnoNovo = new Countdown("01 January 2023 00:00:00 GMT-0300");

setInterval(() => {
  natal.innerText =
    "Faltam " +
    diasNatal.total.days +
    " dias " +
    diasNatal.total.hours.toFixed() +
    " horas " +
    diasNatal.total.minutes.toFixed() +
    " minutos e " +
    diasNatal.total.seconds.toFixed() +
    " segundos para o NATAL.";
  natal.innerText +=
    "\n\n\nFaltam " +
    diasAnoNovo.total.days +
    " dias " +
    diasAnoNovo.total.hours.toFixed() +
    " horas " +
    diasAnoNovo.total.minutes.toFixed() +
    " minutos e " +
    diasAnoNovo.total.seconds.toFixed() +
    " segundos para o REVEILLON.";
}, 1000);
