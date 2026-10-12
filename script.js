const form = document.getElementById("form-tarefa");
const input = document.getElementById("input-tarefa");
const lista = document.getElementById("lista-tarefas");

let tarefas = [];

function salvar() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function carregar() {
  const dados = localStorage.getItem("tarefas");
  if (dados) {
    tarefas = JSON.parse(dados);
  }
}

function renderizar() {
  lista.innerHTML = "";

  tarefas.forEach(function (tarefa, indice) {
    const item = document.createElement("li");
    if (tarefa.concluida) {
      item.classList.add("concluida");
    }

    const span = document.createElement("span");
    span.textContent = tarefa.texto;
    span.addEventListener("click", function () {
      tarefas[indice].concluida = !tarefas[indice].concluida;
      salvar();
      renderizar();
    });

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("remover");
    botaoRemover.addEventListener("click", function () {
      tarefas.splice(indice, 1);
      salvar();
      renderizar();
    });

    item.appendChild(span);
    item.appendChild(botaoRemover);
    lista.appendChild(item);
  });
}

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = input.value.trim();
  if (texto === "") return;

  tarefas.push({ texto: texto, concluida: false });
  salvar();
  renderizar();

  input.value = "";
  input.focus();
});

carregar();
renderizar();