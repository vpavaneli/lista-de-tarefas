const form = document.getElementById("form-tarefa");
const input = document.getElementById("input-tarefa");
const lista = document.getElementById("lista-tarefas");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = input.value.trim();
  if (texto === "") return;

  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);

  input.value = "";
  input.focus();
});