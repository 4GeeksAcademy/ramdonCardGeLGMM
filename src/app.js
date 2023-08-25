/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// funcion que genera la carta de manera aleatoria llamando las otras dos funciones
window.onload = function() {
  generateCard();
  // boton para refrescar la pagina y obtener una nueva carta
  let refreshButton = document.querySelector("#refreshButton");
  refreshButton.addEventListener("click", function() {
    location.reload();
  });
  document.querySelector("#toResize").addEventListener("click", () => {
    resize();
  });
  // Aqui establecimos un temporizador para que se actualize la pagina automaticamente cada 5 segundos
  setInterval(generateCard, 5000);
};

//
function resize() {
  let widthInput = document.querySelector("#widthInput").value;
  let heightInput = document.querySelector("#heightInput").value;
  let cardDiv = document.querySelector("#card");
  cardDiv.style.width = widthInput + "px";
  cardDiv.style.height = heightInput + "px";
}

//
function generateCard() {
  document.querySelector("#card").classList.add(generateRandomSuit());
  document.querySelector("#card").innerHTML = generateRandomNumber();
}

// funcion que va generando los distintos numeros
let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumber = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumber];
};

// funcion que va generando los distintos tipos de carta
let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
