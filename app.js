// add all selectors;

const inputTodo = document.getElementById('todo')
const submitTodo = document.getElementById('add-todo');
const todoForm = document.getElementById('input-form')
const ul = document.getElementById('lists');
const massage = document.getElementById('massage')
let count = 0


// show massage function

const showMassage = (text, status) => {
  massage.textContent = text
  massage.classList.add(`bg-${status}`)
  setTimeout(() => {
    massage.textContent = ''
    massage.classList.remove(`bg-${status}`)
  }, 1000)
}

//add todudo

const addTodo = (event) => {

  event.preventDefault()
  const info = inputTodo.value;

  //   genarate id 

  const randomId = Date.now().toString();

  // create function 

  createTodo(randomId, info)

  showMassage('successfully added', 'success')

   inputTodo.value = ''

}

// create function

const createTodo = (randomId, info) => {

  const li = document.createElement('li');
  li.id = randomId;

  
   count = count + 1
   console.log()

  li.className = 'list-item'
  li.innerHTML = `
<span>${count}</span>
<span>${info}</span>
<span><button class="btn text-red" id="delete-btn">delete</button</span>




`
  ul.appendChild(li)


// called delete function

const deleteBtn = document.getElementById('delete-btn');
deleteBtn.id = randomId
  deleteBtn.addEventListener('click',deleteTodo)





}
// delete todo 

const deleteTodo = (event)=>{
  const selectedTodo = event.target.parentNode.parentNode;
  ul.removeChild(selectedTodo)
  showMassage(`successfully deleted `, 'danger')
}


//add event listener

todoForm.addEventListener('submit', addTodo)

