const selectors = {
  clickAddBtn: ".addBtn",
  myUL: ".myUL",
  deleteAllBtn: ".deleteBtn",
  listChecked: "ul",
  enterInput: '.myInput',
};

const clickAddBtn = document.querySelector(selectors.clickAddBtn);
const myUL = document.querySelector(selectors.myUL);
const deleteAllBtn = document.querySelector(selectors.deleteAllBtn);
const listChecked = document.querySelector(selectors.listChecked);
const enterInput = document.querySelector(selectors.enterInput);

clickAddBtn.addEventListener("click", function addNewNode() {
  const inputValue = document.querySelector("input").value;
  if (inputValue === "") {
    alert("Please, input your task!");
    return;
  }

  const htmlOfNote = (text) => `<li>${text} <span class='close'>×</span> </li>`;
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
});


enterInput.onkeypress = function(event) {
  if (event.keyCode == 13 || event.key == 13) {
    total = +enterInput.value;
    enterInput.value = total;
    enterInput.value = "";
    return;
  }
};
