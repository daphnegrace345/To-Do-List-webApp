let editIndex = null;

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  const message = document.getElementById('message');

  if (taskText === "") return;

  if (editIndex !== null) {
    const listItems = document.querySelectorAll("#taskList li span.task-text");
    listItems[editIndex].textContent = taskText;
    message.textContent = "Task updated successfully!";
    editIndex = null;
  } else {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <div class="icons">
        <span onclick="toggleComplete(this)">✔️</span>
        <span onclick="editTask(this)">✏️</span>
        <span onclick="deleteTask(this)">🗑️</span>
      </div>
    `;

    document.getElementById("taskList").appendChild(li);
    message.textContent = "Todo item Created Successfully.";
  }

  input.value = "";
  setTimeout(() => (message.textContent = ""), 2000);
}

function toggleComplete(elem) {
  const text = elem.parentElement.previousElementSibling;
  text.classList.toggle("completed");
}

function editTask(elem) {
  const textElem = elem.parentElement.previousElementSibling;
  const input = document.getElementById('taskInput');
  input.value = textElem.textContent;

  const listItems = document.querySelectorAll("#taskList li span.task-text");
  listItems.forEach((el, index) => {
    if (el === textElem) {
      editIndex = index;
    }
  });
}

function deleteTask(elem) {
  const li = elem.closest("li");
  li.remove();
}
