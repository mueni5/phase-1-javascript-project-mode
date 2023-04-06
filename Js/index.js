import { TodoistApi } from "@doist/todoist-api-typescript"
baseUrl =  "http://localhost:3000"


// Read the database file
fetch('db.json')
  .then(response => response.json())
  .then(data => console.log(data.tasks));

// Write a new task to the database file
const newTask = {
  id: 4,
  title: 'Go to the gym',
  completed: false
};
fetch('db.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newTask)
})
.then(response => response.json())
.then(data => console.log(data.tasks));



const form = document.querySelector('form');
const input = document.querySelector('#new-item');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    const item = document.createElement('li');
    item.innerText = text;
    list.appendChild(item);
    input.value = '';
    addTodoistItem(text);
  }
});

function addTodoistItem(text) {
const api = new TodoistApi("0123456789abcdef0123456789")
const token = '';
  const project_id = 'tasker'; // optional, set to null if you want to add to Inbox
  const task = {
    content: text,
    project_id: project_id
  };
  Todoist.sync(token, [task], function(response) {
    console.log(response);
  });
}
