/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const excuseGenerator = () => {
    // Variables para encontrar el indice de cada array
    let numeroAleatorioDecimal = Math.random();
    let indexWho = Math.floor(numeroAleatorioDecimal * who.length);
    let indexAction = Math.floor(numeroAleatorioDecimal * action.length);
    let indexWhat = Math.floor(numeroAleatorioDecimal * what.length);
    let indexWhen = Math.floor(numeroAleatorioDecimal * when.length);

    // Variables para obtener la palabra de cada array de forma numeroAleatorioDecimal
    let wordWho = who[indexWho];
    let wordAction = action[indexAction];
    let wordWhat = what[indexWhat];
    let wordWhen = when[indexWhen];

    // Variables de la excusa completa
    let excuse = wordWho + " " + wordAction + " " + wordWhat + " " + wordWhen;

    return excuse;
  };

  console.log(excuseGenerator());

  document.querySelector("#excuse").innerHTML = excuseGenerator();
};
