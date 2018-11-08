class ListBinding {
  constructor(element) {
    this.element = element;
    this.textList = ["First Item"];
  }
  deleteAll() {
    while (this.element.firstChild)
      this.element.removeChild(this.element.firstChild);
  }
  update() {
    this.deleteAll();
    for (let text of this.textList) {
      let item = document.createElement("li");
      item.textContent = text;
      this.element.appendChild(item);
    }
  }
  add(item) {
    this.textList.push(item);
    this.update();
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
var secondList = new ListBinding(doneList);
