import "../../global.css";
import imgDesafio1 from "./print-desafio1.png";

document.getElementById("app").innerHTML = `
  <h1>Desafio do dia 1 - Operações Booleanas</h1>
  <div>
    <p>
      A tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros.
    </p>
    <img
      src=${imgDesafio1}
      width="75%"
    />
    <p>Abra o <code>Console</code> para conferir o resultado! </p>
  </div>

`;

let numeroUm = 1;
let stringUm = "1";
let numeroTrinta = 30;
let stringTrinta = "30";
let numeroDez = 10;
let stringDez = "10";

if (numeroUm == stringUm) {
  console.log(
    "As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes!"
  );
} else {
  console.log("As variáveis numeroUm e stringUm não tem o mesmo valor!");
}

if (numeroTrinta === stringTrinta) {
  console.log(
    "As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo!"
  );
} else {
  console.log("As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo!");
}

if (numeroDez == stringDez) {
  console.log(
    "As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes!"
  );
} else {
  console.log("As variáveis numeroDez e stringDez não tem o mesmo valor!");
}
