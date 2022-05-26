document.addEventListener("DOMContentLoaded", main);
function main() {
  addTodo();
  const add = document.getElementById("add-btn");
  const txtInput = document.querySelector(".txt-input");
  add.addEventListener("click", function () {
    const item = txtInput.value.trim();
    if (item) {
      txtInput.value = "";
      const todos = !localStorage.getItem("todos")
        ? []
        : JSON.parse(localStorage.getItem("todos"));
      const currentTodo = {
        item,
        isCompleted: false,
      };
      addTodo([currentTodo]);
      todos.push(currentTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  });
}
function addTodo(todos = JSON.parse(localStorage.getItem("todos"))) {
  if (!todos) {
    return null;
  }
  const itemsleft = document.getElementById("items-left");
  //create cards
  todos.forEach(function (todo) {
    const card = document.createElement("li");
    const cbContainer = document.createElement("div");
    const cbInput = document;
  });
}
