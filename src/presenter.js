import TorosVacas from "./torosyvacas.js";

const form = document.querySelector("#tv-form");
const codigoSec = document.querySelector("#codigosecreto");
const div = document.querySelector("#resultado-div");

const adivinarForm = document.querySelector("#adivinar-form");
const adivinarIntento = document.querySelector("#intento");

let torosYvacas = "";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const codigo = codigoSec.value; 
  torosYvacas = new TorosVacas(codigo); 
});

adivinarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const intento = adivinarIntento.value;

  div.innerHTML = "<p>" + torosYvacas.adivinar(intento) + "</p>";
});