document.addEventListener('DOMContentLoaded', function() {
  
  // Form Validation
  document.getElementById('survey').addEventListener('submit', function(event) {
    var inputs = document.querySelectorAll('#survey input');
    var valid = true;
    inputs.forEach(function(input) {
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
  var addButton = document.getElementById('addTaskButton');
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  addButton.addEventListener('click', function() {
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
      var listItem = document.createElement('li');
      listItem.textContent = taskText;
      listItem.style.padding = '10px';
      listItem.style.borderBottom = '1px solid #ddd';

      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.style.marginLeft = '10px';
      deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
      });

      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
  });
});
