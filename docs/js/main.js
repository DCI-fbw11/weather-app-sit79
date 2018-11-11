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
      let content = `<p class="done" id="entry${i}" onclick="firstList.isDone(${i})">${text}</p>`;
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
        "Please enter a task"
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
    let tempVal = `entry${index}`;
    let listItem = document.getElementById(tempVal);
    listItem.classList.remove('done');
    listItem.classList.add('deleted');
    setTimeout(function () {
      // console.log(firstList.element);
      let tempValue = firstList.textList.splice(index, 1);
      firstList.doneList.push(tempValue);
      firstList.update();
    }, 1500);
  }
}

const myList = document.getElementById("myList");
const doneList = document.getElementById("doneList");
var firstList = new ListBinding(myList);

var newEntry = document.getElementById("newEntry");
var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let position = document.getElementById("newEntryField");
  let entry = position.value;
  firstList.add(entry);
});