const searchInput = document.getElementById('search-input');
const allList = document.querySelectorAll('#todo-container', 'li');
let searchArr = []

searchInput.oninput = () => {
    searchArr = []
    todoObj.map((data, i) => {
        if ( data.text.includes(searchInput.value) ) {
            searchArr.push(data)
        }
    })
    todoContainer.innerHTML = '';
    searchArr.map((data, i) => {
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
    })
}
