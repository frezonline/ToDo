const selectors = {
  clickAddBtn: '.addBtn',
  myUL: '.myUL',
  deleteAllBtn: '.deleteBtn'
};

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
  document.querySelector("input").value = '';
});

const listChecked = document.querySelector('ul');
listChecked.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
  if (ev.target.closest('.close'))
      ev.target.closest('li').remove();
}, false);


const deleteAllBtn = document.querySelector('.deleteBtn');
const myUL = document.querySelector('.myUL');
deleteAllBtn.addEventListener('click', function (i) {
 (i.target.classList.contains('deliteBtn'));
  myUL.innerHTML = '';
});
