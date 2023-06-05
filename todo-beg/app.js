'use strict';
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const ul = document.querySelector('ul')

const todos = JSON.parse(localStorage.getItem('todos'));

// ストレージに保存されているものがあれば、画面更新たときに再度リストに追加
if (todos) {
    todos.forEach((todo) => {
        add(todo);
    });
}

// formでエンター押したらTodoリスト追加してフォームをクリア
form.addEventListener('submit', function (e) {
    e.preventDefault();
    add();
});

// Todoリストに入力内容を追加
function add(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo;
    }

    if (todoText) {  //暗黙的型変換 todoText > 0 がこの一文で可能。
        const li = document.createElement('li');

        li.textContent = todoText;
        li.classList.add('list-group-item')
        
        ul.appendChild(li);
        input.value = '';
        saveData();
    }
}

// liの要素をローカルストレージに保存
function saveData() {
    const lists = document.querySelectorAll('li');
    const todos = [];

    lists.forEach((list) => {
        todos.push(list.textContent);
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}