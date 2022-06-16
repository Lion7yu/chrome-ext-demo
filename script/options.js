const taskContainer = document.getElementById('task-container');

var newTask, taskNum = 0

$('#new_task').bind("input propertychange",(e)=>{
  newTask = $('#new_task').val();
})

$('button').click(e => {
  const task = document.createElement('section')
  const checkbox = document.createElement('input')
  const number = document.createElement('span')
  number.innerHTML = taskNum + 1
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('id', 'checkbox-1')
  checkbox.attributes = 'checkbox'
  checkbox.innerHTML = 'checkbox'
  const label = document.createElement('label')
  label.innerHTML = $('#new_task').val()
  task.appendChild(number)
  task.appendChild(checkbox)
  task.appendChild(label)
  taskContainer.appendChild(task)
});

$('#checkbox-1').click(e => {
  console.log('fuck')
})