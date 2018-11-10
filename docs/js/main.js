class ListBinding {
  constructor(element) {
    this.element = element;
    this.textList = [];
    this.doneList = [];
  }
  deleteAll() {
    while (this.element.firstChild)
      this.element.removeChild(this.element.firstChild);
  }
  update() {
    this.deleteAll();
    let i = 0;
    for (let text of this.textList) {
      let item = document.createElement("li");
      let content = `<p class="done" onclick="firstList.isDone(${i})">${text}</p>`;
      item.innerHTML = content;
      this.element.appendChild(item);
      i++;
    }
    let position = document.getElementById("newEntryField");
    position.value = "";
  }
  add(item) {
    if (item !== "") {
      this.textList.push(item);
      this.update();
    } else {
      window.alert(
        "If you have nothing to do,\nwhat do you need a To Do List for?"
      );
    }
  }
  deleteFirst() {
    this.textList.shift();
    this.update();
  }
  deleteLast() {
    this.textList.pop();
    this.update();
  }
  isDone(index) {
    let tempValue = this.textList.splice(index, 1);
    this.doneList.push(tempValue);
    this.update();
  }
}

const myList = document.getElementById("myList");
const doneList = document.getElementById("doneList");
var firstList = new ListBinding(myList);

var newEntry = document.getElementById("newEntry");
var updateButton = document.getElementById("updateButton");
var submitButton = document.getElementById("submitButton");
var consoleButton = document.getElementById("consoleLog");
var deleteFirstButton = document.getElementById("deleteFirst");
var deleteLastButton = document.getElementById("deleteLast");

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  let position = document.getElementById("newEntryField");
  let entry = position.value;
  firstList.add(entry);
});

// updateButton.addEventListener("click", function() {
//   firstList.update();
// });
// consoleButton.addEventListener("click", function() {
//   console.log(firstList.textList);
// });
// deleteFirstButton.addEventListener("click", function() {
//   firstList.deleteFirst();
// });
// deleteLastButton.addEventListener("click", function() {
//   firstList.deleteLast();
// });
