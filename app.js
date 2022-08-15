// add all selectors;

const inputTodo = document.getElementById('todo')
const submitTodo = document.getElementById('add-todo');
const todoForm = document.getElementById('input-form')

//add todudo

const addTodo = (event)=>{

   event.preventDefault()
   console.log(inputTodo.value)

}


//add event listener

todoForm.addEventListener('submit',addTodo)

