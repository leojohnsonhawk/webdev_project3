function handleSurveySubmission(event) {
  event.preventDefault(); 


  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const text = document.getElementById("text").value;


  alert(`Thank you for your feedback, ${name}!`);

  document.getElementById("survey").reset();
}


document.addEventListener("DOMContentLoaded", () => {
  const surveyForm = document.getElementById("survey");
  surveyForm.addEventListener("submit", handleSurveySubmission);
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
}


document.addEventListener("DOMContentLoaded", initializeTaskManagement);
