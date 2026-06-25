let todoList = JSON.parse(localStorage.getItem("todoList")) || [
  { name: "Make dinner", dueDate: "2026-3-4" },
  { name: "Wash dishes", dueDate: "2026-3-5" },
];
renderTodoList();
function addTask() {
  const taskInput = document.querySelector(".task");
  const name = taskInput.value;
  const dateInput = document.querySelector(".date");
  const dueDate = dateInput.value;
  taskInput.value = "";
  dateInput.value = "";
  if (!name || !dueDate) {
    return;
  };
  todoList.push({
    name,
    dueDate,
  });
  saveToStorage();
  renderTodoList();
};
function renderTodoList() {
  let html = "";
  todoList.forEach((todoObj, index) => {
    const { name, dueDate } = todoObj;
    html += `<div class="todo-row">
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button">Delete</button>
    </div>`;
  });
  document.querySelector(".tasks").innerHTML = html;
  document
    .querySelectorAll(".delete-todo-button")
    .forEach((deleteBtn, index) => {
      deleteBtn.addEventListener("click", () => {
        deleteTodo(index);
      });
    });
};
document.querySelector(".add-todo-button").addEventListener("click", () => {
  addTask();
});
function deleteTodo(i) {
  todoList.splice(i, 1);
  saveToStorage();
  renderTodoList();
};
function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};