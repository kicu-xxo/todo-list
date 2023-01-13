const todoInput = document.querySelector('#text-input');
const todoList = document.querySelector('#todo-list');
const ClearBtn = document.querySelector('#clear-box');
const todoText = document.querySelector('.todo-text');

//인풋 값을 불러오고 정의하고 값 비우기
todoInput.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        생성li(todoInput.value);
        todoInput.value = '';
    }
})

const 생성li = (inputValue) => {
    const addLi = document.createElement('li');
    addLi.classList.add('todo-item')
    const favoriteDiv = addFavorite();
    const todoTextDiv = addTodoText(inputValue);
    const btnDiv = addBtns();
    addLi.appendChild(favoriteDiv);
    addLi.appendChild(todoTextDiv);
    addLi.appendChild(btnDiv);
    todoList.appendChild(addLi);
}

const addFavorite = () => {
    const addDiv = document.createElement('div');
    addDiv.classList.add('favorite-box');
    const addI = document.createElement('i');
    addI.classList.add('material-icons');
    addI.classList.add('favorite-ico');
    addI.innerText = 'favorite_border';
    addDiv.appendChild(addI);

    addDiv.addEventListener('click', () => {
        addI.innerText === 'favorite_border' ?
        addI.innerText = 'favorite' : addI.innerText = 'favorite_border';
    })
    return addDiv;
}

const addTodoText = (inputValue) => {
    const addDiv = document.createElement('div');
    addDiv.classList.add('todo-text');
    addDiv.innerText = inputValue;

    return addDiv;
}

const addBtns = () => {
    const addDiv = document.createElement('div');
    addDiv.classList.add('btn-box');
    const addI1 = document.createElement('i');
    addI1.classList.add('material-icons');
    addI1.classList.add('check-ico');
    addI1.innerText = 'check';
    const addI2 = document.createElement('i');
    addI2.classList.add('material-icons');
    addI2.classList.add('clear-ico');
    addI2.innerText = 'clear';
    addDiv.appendChild(addI1);
    addDiv.appendChild(addI2);

    addI1.addEventListener('click', (e) => {
        const point = e.target.parentNode.previousSibling;
        point.classList.contains('done') ? point.classList.remove('done') : point.classList.add('done');
    })

    addI2.addEventListener('click', (e) => {
        const point = e.target.parentNode.parentNode;
        todoList.removeChild(point);
    })

    return addDiv;
}

ClearBtn.addEventListener('click', () => {
    if(todoList.firstChild) {
        while(todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }
    }
})