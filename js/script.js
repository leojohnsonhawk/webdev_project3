document.addEventListener('DOMContentLoaded', () => {
  
  // Form Validation
  const surveyForm = document.getElementById('survey');
  surveyForm.addEventListener('submit', (event) => {
    const inputs = document.querySelectorAll('#survey input');
    let valid = true;
    inputs.forEach((input) => {
      if (input.value === '') {
        valid = false;
      }
    });
    if (!valid) {
      alert('Please fill out all fields.');
      event.preventDefault();
    }
  });

  // To-Do List
  const addButton = document.getElementById('addTaskButton');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  const createTaskItem = (taskText) => {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.style.padding = '10px';
    listItem.style.borderBottom = '1px solid #ddd';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => taskList.removeChild(listItem));

    listItem.appendChild(deleteButton);
    return listItem;
  };

  addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const listItem = createTaskItem(taskText);
      taskList.appendChild(listItem);
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  });
});
