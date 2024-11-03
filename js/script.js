document.addEventListener("DOMContentLoaded", () => {
  // Survey form handling
  const surveyForm = document.getElementById("surveyForm");

  surveyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const text = document.getElementById("text").value;

    alert(`Thank you for your feedback, ${name}!`);

    surveyForm.reset();
  });

  // Task management
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.getElementById("addTaskButton");

  addTaskButton.addEventListener("click", addTask);

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a game title.");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      ${taskText}
      <button onclick="toggleTask(this)">Complete</button>
      <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
  }

  // Mark task as completed or not completed
  window.toggleTask = (button) => {
    const taskItem = button.parentElement;
    taskItem.classList.toggle("completed");
  }

  // Remove task from the list
  window.removeTask = (button) => {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
}
