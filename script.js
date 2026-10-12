const form = document.getElementById("form-tarefa");
const input = document.getElementById("input-tarefa");
const lista = document.getElementById("lista-tarefas");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = input.value.trim();
  if (texto === "") return;

  adicionarTarefa(texto);

  input.value = "";
  input.focus();
});

function adicionarTarefa(texto) {
  const item = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;
  span.addEventListener("click", function () {
    item.classList.toggle("concluida");
  });

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.classList.add("remover");
  botaoRemover.addEventListener("click", function () {
    item.remove();
  });

  item.appendChild(span);
  item.appendChild(botaoRemover);
  lista.appendChild(item);
}