const input = document.querySelector(".search");
const btn = document.querySelector(".btn");
const todos = document.querySelector(".todo");

btn.onclick = (e) => {
  e.preventDefault();

  if (input.value.trim()) {
    let value = input.value.trim();
    addTodo({
      text: value,
      status: "",
    });
    saveTodo();
  }
};

function addTodo(todo) {
  let li = document.createElement("li");

  li.innerHTML = `
    <span>${todo.text}</span>
    <i class="fa-solid fa-trash"></i>
    `;

  li.setAttribute("class", "todo_list");

  if (todo.status === "completed") {
    li.querySelector("span").classList.add("class", "completed");
  }

  li.addEventListener("click", function () {
    this.querySelector("span").classList.toggle("completed");
    saveTodo();
  });

  let deleteTodo = li.querySelector(".fa-solid");

  deleteTodo.addEventListener("click", function (e) {
    e.stopPropagation();
    this.parentElement.remove();
    saveTodo();
  });

  todos.appendChild(li);
  input.value = "";
}

function saveTodo() {
  let todoList = document.querySelectorAll("li");
  let todoStorage = [];
  todoList.forEach((item) => {
    let text = item.querySelector("span").innerText;
    let status = item.querySelector("span").getAttribute("class");
    todoStorage.push({
      text,
      status,
    });
  });
  localStorage.setItem("todo_list", JSON.stringify(todoStorage));
}

function init() {
  let data = JSON.parse(localStorage.getItem("todo_list"));
  if (data) {
    data.forEach((item) => {
      addTodo(item);
    });
  }
}

init();
