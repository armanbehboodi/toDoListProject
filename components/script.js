let newTodo = document.querySelector(".main__input");
let toDoBox = document.querySelector(".main__toDoBox");
let list = document.querySelector(".main__toDoList");
newTodo.addEventListener("keydown",function (e){
    if (e.keyCode === 13){
        if (newTodo.value.length > 0){
                toDoBox.style.display = "block";
                let newTask = document.createTextNode(newTodo.value);
                let item = document.createElement("li");
                let line = document.createElement("hr");
                item.appendChild(newTask);
                list.appendChild(item).appendChild(line);
                newTodo.value = "";
                if (list.childElementCount > 1){
                    for (let i=0 ; i < list.childElementCount-1 ; i++){
                        if (item.innerText === list.children[i].innerText){
                            document.querySelector(".main__alert").style.display = "block";
                            setTimeout(function (){
                                document.querySelector(".main__alert").style.display = "none"
                            },3000)
                            list.lastChild.remove();
                        }
                    }
                }

                // done or remove tasks

                item.addEventListener("mousedown",function (e){
                    if (e.which === 1){
                        item.classList.toggle("textStyle");
                    }
                    else if (e.which === 3){
                        item.remove();
                        if (list.childElementCount === 0){
                            toDoBox.style.display = "none";
                        }
                    }
                })
        }
    }
})

// prevent from right click menu :

document.querySelector(".main").addEventListener('contextmenu', function (e){
    e.preventDefault();
})