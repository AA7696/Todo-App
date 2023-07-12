
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const myText  = document.querySelector(".my-text");

document.addEventListener("DOMContentLoaded", gettodo);

btn.addEventListener("click", (e) => {
    console.log("clicked");

    let newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.innerHTML = myText.value;
    steLocal(myText.value);
    myText.value = "";
    list.appendChild(newItem);

    newItem.addEventListener("click", () => {
        remove(newItem);
        newItem.classList.toggle("item-text");
    })

});


function steLocal(todo){
    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];

    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function gettodo(){
    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];

    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(todo => {
        let newItem = document.createElement("li");
        newItem.classList.add("item");
        newItem.innerHTML = todo;
        myText.value = "";
        list.appendChild(newItem);
    
        newItem.addEventListener("click", () => {
            remove(newItem);
            newItem.classList.toggle("item-text");
        })
    
    });

}

function remove(todo){
    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];

    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

 const todoIndex = todo.innerHTML
 console.log(todoIndex);
 todos.splice(todos.indexOf(todoIndex),1);
 localStorage.setItem("todos", JSON.stringify(todos));



}