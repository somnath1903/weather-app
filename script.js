const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputbox.value === '') {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode for '×' symbol
    li.appendChild(span); // Append the span to the list item
  }
  inputbox.value = "";
  saveData(); // Save the updated list
}

listcontainer.addEventListener("click", function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked");
    saveData(); // Save the updated state
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData(); // Save the updated list
  }
}, false);

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function loadData() {
  listcontainer.innerHTML = localStorage.getItem("data");
}

// Load data when the page loads
loadData();
