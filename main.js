class ListBinding {
  constructor(element) {
    this.element = element;
    this.textList = ["walk the dog", "go shopping", "laugh about something"];
    // document.getElementById fur input
    // input.addeventlister on click
    // sonder form addeventlister on submit
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
      let content = `<button data-id=${i}>DONE</button> ${text}`;
      item.innerHTML = content;
      this.element.appendChild(item);
      i++;
    }
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
}

const myList = document.getElementById("myList");
const doneList = document.getElementById("doneList");
var firstList = new ListBinding(myList);
// var secondList = new ListBinding(doneList);

var newEntry = document.getElementById("newEntry");
var updateButton = document.getElementById("updateButton");
var submitButton = document.getElementById("submitButton");
var consoleButton = document.getElementById("consoleLog");
var deleteFirstButton = document.getElementById("deleteFirst");
var deleteLastButton = document.getElementById("deleteLast");

updateButton.addEventListener("click", function () {
  firstList.update();
});
submitButton.addEventListener("click", function () {
  let entry = document.getElementById("newEntryField").value;
  firstList.add(entry);
});
consoleButton.addEventListener("click", function () {
  console.log(firstList.textList);
});
deleteFirstButton.addEventListener("click", function () {
  firstList.deleteFirst();
});
deleteLastButton.addEventListener("click", function () {
  firstList.deleteLast();
});