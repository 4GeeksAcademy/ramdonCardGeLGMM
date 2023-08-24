/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// funcion que genera la carta de manera aleatoria llamando las otras dos funciones
window.onload = function generateCard() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
  // boton para refrescar la pagina y obtener una nueva carta
  let refreshButton = document.getElementById("refreshButton");
  refreshButton.addEventListener("click", function() {
    location.reload();
  });
  let cardDiv = document.querySelector(".card");
  // Obtener valores de los campos de entrada
  let widthInput = document.getElementById("widthInput");
  let heightInput = document.getElementById("heightInput");
  // Establecer el ancho y el alto de la carta
  cardDiv.style.width = widthInput.value + "px";
  cardDiv.style.height = heightInput.value + "px";
  // Aqui establecimos un temporizador para que se actualize la pagina automaticamente cada 5 segundos
  setInterval(generateCard, 10000);
};

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
