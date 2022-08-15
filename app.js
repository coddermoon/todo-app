// add all selectors;

const inputTodo = document.getElementById('todo')
const submitTodo = document.getElementById('add-todo');
const todoForm = document.getElementById('input-form')
const ul = document.getElementById('lists')



//add todudo

const addTodo = (event)=>{

   event.preventDefault()
  const info = inputTodo.value;

//   genarate id 

const randomId = Date.now().toString();

// create function 

createTodo(randomId,info)

}

// create function

const createTodo = (randomId,info)=>{
  
const li = document.createElement('li');
li.id = randomId;
li.className = 'list-item'
li.innerHTML = `

<span>${info}</span>
<span><button class="btn text-red" id="delete-btn">delete</button</span>

`
ul.appendChild(li)


}



//add event listener

todoForm.addEventListener('submit',addTodo)

