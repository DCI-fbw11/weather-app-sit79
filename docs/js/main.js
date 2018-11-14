class ListBinding {
  constructor(element) {
    this.element = element;
    this.DOMtodo = document.getElementById("toDoList");
    this.DOMdone = document.getElementById("doneList");
    this.clearButton = document.getElementById("clearButton");
    this.toDoList = [];
    this.doneList = [];
  }
  deleteAll() {
    this.DOMdone.innerHTML = "";
    this.DOMtodo.innerHTML = "";
  }

  render() {
    this.deleteAll();
    let i = 0;
    for (let text of this.toDoList) {
      let item = document.createElement("li");
      let content;
      if (text.status === "unchecked") {
        item.className = "todo";
        item.setAttribute("onclick", `isDone(${i})`);
        //text.status = "unchecked";
        item.innerHTML = text.input;
        this.DOMtodo.appendChild(item);
        // content = `<p class="deleted" id="entry${i}" onclick="myTasks.isDone(${i})">${
        // }</p>`;
      } else {
        item.className = "done";
        item.setAttribute("onclick", `isDone(${i})`);
        // text.status = "checked";
        item.innerHTML = text.input;
        this.DOMdone.appendChild(item);
        // content = `<p class="done" id="entry${i}" onclick="myTasks.isDone(${i})">${
        // }</p>`;
      }
      //this.element.appendChild(item);
      i++;
    }
    let position = document.getElementById("newEntryField");
    position.value = "";
    if (this.toDoList.length) {
      for (let item of this.toDoList) {
        if (item.status === "checked") {
          this.clearButton.style.display = "grid";
          break;
        } else {
          this.clearButton.style.display = "none";
        }
      }
    } else {
      this.clearButton.style.display = "none";
    }
  }
  add(item) {
    if (item !== "") {
      this.toDoList.push({ input: item, status: "unchecked" });
      this.render();
    } else {
      window.alert("Please enter a task");
    }
  }
  isDone(index) {
    if (this.toDoList[index].status === "checked") {
      this.toDoList[index].status = "unchecked";
    } else {
      this.toDoList[index].status = "checked";
    }
    this.render();
  }
  clearList() {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].status === "checked") {
        this.toDoList.splice(i, 1);
        i--;
      }
    }
    this.render();
  }
}

const listDiv = document.getElementById("listDiv");
// const myList = document.getElementById("toDoList");
// const doneList = document.getElementById("doneList");
var myTasks = new ListBinding(listDiv);

var newEntry = document.getElementById("newEntry");
var submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  let position = document.getElementById("newEntryField");
  let entry = position.value;
  myTasks.add(entry);
});

function isDone(item) {
  myTasks.isDone(item);
}

function clearList() {
  myTasks.clearList();
}
