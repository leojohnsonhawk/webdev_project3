function handleSurveySubmission(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const text = document.getElementById("text").value;

  alert(`Thank you for your feedback, ${name}!`);
  document.getElementById("survey").reset(); // Reset the form
}

// Initialize the application when the document is ready
document.addEventListener("DOMContentLoaded", function() {
  const surveyForm = document.getElementById("survey");
  surveyForm.addEventListener("submit", handleSurveySubmission);

  initializeTaskManagement(); // Initialize task management
});

function initializeTaskManagement() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskMessage = document.getElementById("taskMessage");

  addTaskButton.addEventListener("click", addGame);

  function addGame() {
    const gameTitle = taskInput.value.trim();

    if (gameTitle === "") {
      alert("Please enter a game title.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = gameTitle;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
      li.classList.toggle("completed");
    };

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
      taskList.removeChild(li);
      taskMessage.textContent = `"${gameTitle}" has been removed from your list.`;
    };

    li.appendChild(completeButton);
    li.appendChild(removeButton);
    taskList.appendChild(li);

    taskInput.value = ""; // Clear the input
    taskMessage.textContent = `"${gameTitle}" has been added to your list!`;
  }
}
