// Create a "close" button and append it to each list item
const closeBtn = document.getElementsByTagName("LI");
  for (i = 0; i < closeBtn.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      closeBtn[i].appendChild(span);
}

// Click on a close button to hide the current list item
const clickCloseBtn = document.getElementsByClassName("close");
  for (i = 0; i < clickCloseBtn.length; i++) {
    clickCloseBtn[i].onclick = function() {
    let div = this.parentElement;
    div.remove();
  };
} 


// Add a "checked" symbol when clicking on a list item
const checkedList = document.querySelector('Ul');
checkedList.addEventListener('click', function(i) {
  if (i.target.tagName === 'LI') {
    i.target.classList.toggle('checked');
  }
}, false);
