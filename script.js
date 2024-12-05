const todoList = localStorage.getItem('list') 
    ? JSON.parse(localStorage.getItem('list')) 
    : [];

loadList();

function addTodo () {
    const inputTask = document.querySelector('.js-task');
    const inputDate = document.querySelector('.js-date');
    const name = inputTask.value;
    const date = inputDate.value;
    todoList.push({name, date});
    localStorage.setItem('list', JSON.stringify(todoList));
    inputTask.value = '';
    loadList();
};

function loadList() {
    let todoListHTML = '';
    for (i=0; i<todoList.length; i++) {
        const todo = todoList[i].name;
        const dueOn = todoList[i].date;
        const html = `
            <div>
                <div>${todo}</div>
                <div>${dueOn}</div>
                <button onclick="deleteToDo(${i})">Delete</button>
            </div>
        `;
        todoListHTML += html;
    };
    document.querySelector('.list').innerHTML = todoListHTML;
}

function deleteToDo(i) {
    todoList.splice(i,1);
    localStorage.setItem('list', JSON.stringify(todoList));
    loadList();
}