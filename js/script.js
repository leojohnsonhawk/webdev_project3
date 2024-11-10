// Function to handle survey submission
function handleSurveySubmission(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const text = document.getElementById("text").value;

  alert(`Thank you for your feedback, ${name}!`);
  document.getElementById("survey").reset();
}

// Function to initialize the survey form
function initSurveyForm() {
  const surveyForm = document.getElementById("survey");
  surveyForm.addEventListener("submit", handleSurveySubmission);
}

// Function to add a game to the task list
function addGame() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const taskMessage = document.getElementById("taskMessage");
  const gameTitle = taskInput.value.trim();

  if (gameTitle === "") {
    alert("Please enter a game title.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = gameTitle;

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.onclick = () => {
    li.classList.toggle("completed");
  };

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.onclick = () => {
    taskList.removeChild(li);
    taskMessage.textContent = `"${gameTitle}" has been removed from your list.`;
  };

  li.appendChild(completeButton);
  li.appendChild(removeButton);
  taskList.appendChild(li);

  taskInput.value = "";
  taskMessage.textContent = `"${gameTitle}" has been added to your list!`;
}

// Function to initialize the task management
function initializeTaskManagement() {
  const addTaskButton = document.getElementById("addTaskButton");
  addTaskButton.addEventListener("click", addGame);
}

// Initialization function
function init() {
  initSurveyForm();
  initializeTaskManagement();
}

// Add event listener for window load to initialize everything
window.addEventListener('load', init);

