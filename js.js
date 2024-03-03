

function addTask(){
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;


    if(taskText.trim() !== ''){

        var div = document.createElement('div');
        div.classList.add('div-task');

        var listItem = document.createElement('li');
        listItem.textContent = taskText;

        div.appendChild(listItem);

        var divButton = document.createElement('div');
        var DeleteButton = document.createElement('button');
        DeleteButton.textContent = 'Delete';

        DeleteButton.onclick = function(){

            deleteTask(div);
        }
        divButton.appendChild(DeleteButton);

        var EditButton = document.createElement('button');
        EditButton.textContent = 'Edit';

        EditButton.onclick = function(){
            
            EditTask(listItem);
        }
        divButton.appendChild(EditButton);
        div.appendChild(divButton);

        document.getElementById('taskList').appendChild(div);
        taskInput.value = '';
    }
}

function deleteTask(task){
    task.parentNode.removeChild(task);
}

function EditTask(task){
    var newText = prompt('Edit Task :');
    if(newText !== null && newText.trim() !== ''){
        task.textContent = newText;
    }
}