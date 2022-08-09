import "../../global.css";

document.getElementById("app").innerHTML = `
  <h1>Desafio do dia 2 - Variáveis</h1>
  <div>
    <p>
      A tarefa de hoje é criar um sistema que à medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas. No final, o sistema vai exibir a mensagem: <br>
      <code>
        "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
      </code>
    </p>
  </div>
`;

const nome = prompt("Digite o seu nome:");
const idade = prompt("Digite a sua idade:");
const lingProgram = prompt(
  "Digite qual(is) linguagem(ns) de programação está estudando:"
);
const msg = `Olá, ${nome}!\nVocê tem ${idade} de idade e no momento está estudando ${lingProgram}.`;
alert(msg);
