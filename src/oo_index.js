document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();
  const createTaskForm = document.querySelector('#create-task-form')
  const taskDescription = document.querySelector('#new-task-description')
  createTaskForm.addEventListener('submit', (e) => makeTask(e));

  function makeTask (e) {
    e.preventDefault();
    const tasks = document.querySelector('#tasks');
    let li = document.createElement('li');
    let priority = document.querySelector('#new-task-priority').value;
    li.innerText = taskDescription.value + ` `;
    if (priority === "Low") {
      li.style.color = `green`;
    } else if (priority === "Medium") {
      li.style.color = `orange`;
    } else {
      li.style.color = `red`;
    }
    let deleteButton = document.createElement('button');
    deleteButton.innerText = `x`;
    deleteButton.addEventListener('click', (e) => e.target.parentNode.remove());
    li.append(deleteButton);
    taskDescription.value = '';
    tasks.append(li);
  }
});
