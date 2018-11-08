class ListBinding {
  constructor(element) {
    this.element = element;
    this.textList = ["TEST", "Another Test"];
    // document.getElementById fur input
    // input.addeventlister on click
    // sonder form addeventlister on submit
    this.input = document.getElementById("newEntry");
    this.updateButton = document.getElementById("updateButton");
    this.submitButton = document.getElementById("submitButton");
    this.updateButton.addEventListener("click", this.update());
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
      let template = `<button data-id=${i}>DONE</button> ${text}`;
      item.innerHTML = template;
      this.element.appendChild(item);
      i++;
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
// var secondList = new ListBinding(doneList);
