const selectors = {
  clickAddBtn: ".addBtn",
  myUL: ".myUL",
  deleteAllBtn: ".deleteBtn",
  listChecked: "ul",
  enterInput: ".myInput",
  inputValue: "input",
};

const clickAddBtn = document.querySelector(selectors.clickAddBtn);
const myUL = document.querySelector(selectors.myUL);
const deleteAllBtn = document.querySelector(selectors.deleteAllBtn);
const listChecked = document.querySelector(selectors.listChecked);
const enterInput = document.querySelector(selectors.enterInput);
const inputValue = document.querySelector(selectors.inputValue);

const htmlOfNote = (todoItem) =>
  `<li id=${todoItem.id} class='${todoItem.checked ? "checked" : ""}'>${
    todoItem.text
  } <span class='close'>×</span> </li>`;

let todoStorage = JSON.parse(localStorage.getItem("TODO storage")) || [];
if (todoStorage.length > 0) {
  todoStorage.forEach((item) => {
    myUL.insertAdjacentHTML("beforeEnd", htmlOfNote(item));
  });
}

function setNewTodo(text) {
  const storage = JSON.parse(localStorage.getItem("TODO storage")) || [];
  const newTodo = {
    text: text,
    checked: false,
    id: Math.floor(Math.random() * 1000),
  };
  storage.push(newTodo);
  localStorage.setItem("TODO storage", JSON.stringify(storage));
  myUL.insertAdjacentHTML("beforeEnd", htmlOfNote(newTodo));
}

clickAddBtn.addEventListener("click", function addNewNode() {
  const textOfNewToDo = document.querySelector("input").value;
  if (textOfNewToDo === "") {
    alert("Please, input your task!").return;
  }
  setNewTodo(textOfNewToDo);
  document.querySelector("input").value = "";
});

enterInput.onkeypress = function (event) {
  if (event.keyCode == 13 || event.key == 13) {
    const textOfNewToDo = document.querySelector(selectors.inputValue).value;
    setNewTodo(textOfNewToDo);
    document.querySelector("input").value = "";
  }
};

listChecked.addEventListener("click", ({ target }) => {
  const todoStorage = JSON.parse(localStorage.getItem("TODO storage"));

  if (target.tagName === "LI") {
    const idOfNote = +target.getAttribute("id");
    const updatedStorage = todoStorage.map((item) => {
      if (item.id === idOfNote) {
        item.checked = !item.checked;
      }
      return item;
    });
    localStorage.setItem("TODO storage", JSON.stringify(updatedStorage));
    event.target.classList.toggle("checked");
  }

  if (target.closest(".close")) {
    const idOfNote = +target.closest("li").getAttribute("id");
    const updatedStorage = todoStorage.filter((item) => item.id !== idOfNote);
    localStorage.setItem("TODO storage", JSON.stringify(updatedStorage));
    target.closest("li").remove();
  }
});

deleteAllBtn.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteBtn")) {
    myUL.innerHTML = "";
    localStorage.clear();
  }
});
