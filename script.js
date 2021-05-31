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

const htmlOfNote = (text) => `<li>${text} <span class='close'>×</span> </li>`;

function saveToDoList(text) {
  const todo = { task: text };
  todoStorage.push(todo);
  localStorage.setItem("TODO storage", JSON.stringify(todoStorage));
}

const todoStorage = JSON.parse(localStorage.getItem("TODO storage")) || [];
todoStorage.forEach((item) => {
  myUL.insertAdjacentHTML("beforeEnd", htmlOfNote(item.task));
});

clickAddBtn.addEventListener("click", function addNewNode() {
  const inputValue = document.querySelector("input").value;
  if (inputValue === "") {
    alert("Please, input your task!");
    return;
  }

  saveToDoList(inputValue);

  myUL.insertAdjacentHTML("beforeEnd", htmlOfNote(inputValue));
  document.querySelector("input").value = "";
});

listChecked.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
    if (event.target.closest(".close")) event.target.closest("li").remove();
  },
  false
);

deleteAllBtn.addEventListener("click", function (event) {
  event.target.classList.contains("deliteBtn");
  myUL.innerHTML = "";
  localStorage.clear(todoStorage);
  window.location.reload();
});

enterInput.onkeypress = function (event) {
  if (event.keyCode == 13 || event.key == 13) {
    const text = document.querySelector(selectors.inputValue).value;
    myUL.insertAdjacentHTML("beforeEnd", htmlOfNote(text));
    saveToDoList(text);
    document.querySelector("input").value = "";
  }
};
