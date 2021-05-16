const clickAddBtn = document.querySelector('.addBtn');
clickAddBtn.addEventListener('click', function addNewNode() {
  const inputValue = document.querySelector("input").value;
    if (inputValue === '') {
      alert('Please, enter value!');
      return;
  }
  const myUL = document.querySelector('.myUL');
  const htmlOfNote = (text) => 
    `<li>${text} <span class='close'>×</span> </li>`;
  myUL.insertAdjacentHTML('beforeEnd', htmlOfNote(inputValue));
  
});

const listChecked = document.querySelector('ul');
listChecked.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


const close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.remove();
  }
}



