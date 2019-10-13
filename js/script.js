const incomplete = document.getElementsByTagName('ul')[0];
const compeletedList = document.getElementsByTagName('ul')[1];
const buttonAdd = document.querySelector('button.addItem');
const newTask = document.getElementById('new-task');
const listUl = document.querySelector('ul');

console.log('Javascript Loaded');

buttonAdd.addEventListener('click', () => {
  let li = document.createElement('li');
  let input = document.createElement('input');
  let label = document.createElement('label');
  let deleteButton = document.createElement('button');
  deleteButton.className = 'delete';

  deleteButton.innerText = 'Delete';

  label.textContent = newTask.value;
  input.type = 'checkbox';

  if (newTask.value == '') {
    alert('Please fill in text field');
  } else {
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(deleteButton);
    incomplete.appendChild(li);

    buttonRemove = document.querySelectorAll('button.delete');
    checkBox = document.querySelectorAll('[type=checkbox]');

    newTask.value = '';
  }
  storeData();
});

listUl.addEventListener('click', () => {
  isCheckBox = event.target;

  if (isCheckBox.type == 'checkbox') {
    if (isCheckBox.checked) {
      listUl.removeChild(event.target.parentNode);
      compeletedList.appendChild(event.target.parentNode);
    }
  }
  storeData();
});

listUl.addEventListener('click', () => {

  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'delete') {
      listUl.removeChild(event.target.parentNode);
      storeData();
    } else {
      console.log('Cannot Remove Item');
    }
  }
});

compeletedList.addEventListener('click', () => {

  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'delete') {
      compeletedList.removeChild(event.target.parentNode);
      storeData();
    } else {
      console.log('Cannot Remove Item');
    }
  }
});

const storeData = () =>
{
    const incompleteTasks = document.getElementById("incomplete-tasks").children;
    const completedTasks = document.getElementById("completed-tasks").children;

        var listContents = [];
        for(let i =0; i<incompleteTasks.length; i++){
           listContents.push(incompleteTasks[i].innerHTML);
        }
    localStorage.setItem("incomplete", JSON.stringify(listContents));

    var listContents = [];
    for(let i =0; i<completedTasks.length; i++){
        listContents.push(completedTasks[i].innerHTML);
     }
    localStorage.setItem("completed", JSON.stringify(listContents));

    console.log(localStorage.getItem("completed"));
    console.log("Function called");
}

window.onload = () => {
    // compeletedList.innerHTML(localStorage.getItem("completed"));

    var listIncompleteContents = JSON.parse(localStorage.getItem('incomplete'));
        for(let i=0; i<listIncompleteContents.length; i++){
            incomplete.innerHTML += "<li>" + listIncompleteContents[i] + "</li>";
        }
    var listCompletedTasks = JSON.parse(localStorage.getItem('completed'));
        for(let i=0; i<listCompletedTasks.length; i++){
            compeletedList.innerHTML += "<li>" + listCompletedTasks[i] + "</li>";
        }
}