const selectAddButton = document.getElementById('select-add');
const selectSearchButton = document.getElementById('select-search');
const searchContainer = document.getElementById('search-container');
const addContainer = document.getElementById('add-container');
const todoContainer = document.getElementById('todo-container');
const addPostinput = document.getElementById('add-post-input');
const addPostButton = document.getElementById('add-post-button');
const deleteButton = document.getElementById('delete-button');
const doneButton = document.getElementById('done-button');
let todoObj = localStorage.getItem('todo') != null ? JSON.parse(localStorage.getItem('todo')) : [];
const reCheckStorage = () => {
    if ( localStorage.getItem('todo') == '' || !localStorage.getItem('todo') || localStorage.getItem('todo') == "[]" ) {
        todoContainer.innerHTML = `
            <li class="main-todo-card">
                <p class="card-p">Записи не найдены! Вы можете начать добавлять записи)</p>
            </li>
        `
    } else {
        todoContainer.innerHTML = '';
        todoObj.map((data, i) => {
            todoContainer.innerHTML += `
                <li id="${data.id}" class="main-todo-card">
                    <p class="card-p">${i + 1}.</p>
                    <p class="card-p${data.status == 'done' ? ' done-card' : ''}">${data.text}</p>
                    ${data.status == 'done' ? ' ' : `
                        <button id="done-button" class="card-action-button">
                            <img id="${data.id}" src="images/done.svg" class="card-action-ico done" alt="">
                        </button>
                    `}
                    <button id="delete-button" class="card-action-button">
                        <img id="${data.id}" src="images/delete.svg" class="card-action-ico delete" alt="">
                    </button>
                </li>
            `
        });
    };
};
reCheckStorage();

addPostButton.onclick = () => {
    let todoArr = {
        id: todoObj.length + 1,
        text: addPostinput.value,
        status: 'active'
    }
    todoObj.push( todoArr );

    localStorage.setItem('todo', JSON.stringify(todoObj));
    reCheckStorage();

    addPostinput.value = '';
}

document.addEventListener("click", function(e) {
    if ( e.target.className == "card-action-ico delete" ) {
        console.log(e.target.id);
        const numberToDelete = e.target.id;

        let deletArr = [];
        todoObj.map(data => {
            if (data.id != numberToDelete) {
                deletArr.push(data);
            };
        });
        todoObj = deletArr;
        localStorage.setItem('todo', JSON.stringify(todoObj));
        reCheckStorage();
    };
    if ( e.target.className == "card-action-ico done" ) {
        console.log(e.target.id);
        const numberToDone = e.target.id;

        let doneArr = [];
        todoObj.map(data => {
            if (data.id == numberToDone) {
                data.status = "done";
            }
            doneArr.push(data);
        })
        todoObj = doneArr;
        localStorage.setItem('todo', JSON.stringify(todoObj));
        reCheckStorage();
    }
});

selectAddButton.onclick = () => {
    searchContainer.classList.add('hide');
    searchContainer.classList.remove('main-action-list-container');

    addContainer.classList.remove('hide');
    addContainer.classList.add('main-action-list-container');

    reCheckStorage();
}

selectSearchButton.onclick = () => {
    addContainer.classList.add('hide');
    addContainer.classList.remove('main-action-list-container');

    searchContainer.classList.remove('hide');
    searchContainer.classList.add('main-action-list-container');
}