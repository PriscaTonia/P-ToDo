//create constant variables for your elements that are being gotten from your html document

const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const todoList = document.querySelector(".todo-list");
const clearBtn = document.querySelector(".clearAll");

//event listners
addBtn.addEventListener('click', addList);
clearBtn.addEventListener('click', clearAll)


//add new todo's to the list
function addList(e){
    //to prevent refreshing of the page
    e.preventDefault();

    const newTodo = document.createElement("li");

    const todotext = document.createElement("p");
    todotext.classList.add('todo-item');

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML='<i class="fa fa-check-square" aria-hidden="true"></i>';

    const delBtn = document.createElement("button");
    delBtn.innerHTML= '<i class="fas fa-trash-alt"></i>';

    if(input.value !== ""){
        //setting the value of your input to be your new todo
        todotext.innerText = input.value;

        //appending your new todo(li) to the list(ul)
        newTodo.appendChild(todotext);
        newTodo.appendChild(checkBtn);
        newTodo.appendChild(delBtn);
        todoList.appendChild(newTodo);
    
    } else{
        //if your input is empty though
        alert("please type in a todo");
    }

    //reseting the value of your input box to empty
    input.value="";
    clearBtn.style="display:block";
    checkBtn.addEventListener('click', checkList);
    delBtn.addEventListener('click', delList);
   
}

//check finished todo's
function checkList(e){
    const todo= e.target.parentElement.parentElement;
    todo.classList.toggle("checked");
}

//delete todo's from the list
function delList(e){
    const todo= e.target.parentElement.parentElement;
    todo.remove();
}

//clear all todo's
function clearAll(){
   let todoItems = [];
   todoItems.push(...todoList.children);
   console.log(todoItems);
    todoItems.map(item => {
        item.remove();
    })
    //reset style to display none
   clearBtn.style="display: none;"
}
