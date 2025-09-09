const todoList = JSON.parse(localStorage.getItem('todoList')) || [
  { 
  name: 'make dinner',
  dueDate: '2025-12-23'
  },
  { 
  name: 'wash clothes',
  dueDate: '2025-12-22'
  }
 
];

rendertodo();
 
function rendertodo(){


   let todoListHtml = '';

   

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name , dueDate} = todoObject;
   

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    
    <button onclick="
    todoList.splice(${i},1);
     rendertodo();
     saveToStorage();
    " class ="del-button">Delete</button>`;

    todoListHtml += html;

    
    
  }
  
   document.querySelector('.js-todo-list').innerHTML = todoListHtml;
  
 

  
}



function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement =  document.querySelector('.js-due-date-input');
  const dueDate= dateInputElement.value;
  

  todoList.push({
  
    name,
    dueDate
  });
  

  inputElement.value = ''; //make the text will be empty
  dateInputElement.value = '';

  rendertodo();
  saveToStorage();
 
}


function saveToStorage(){
   localStorage.setItem('todoList',JSON.stringify(todoList));
}