'use strict';
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const ul = document.querySelector('ul')

const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach((todo) => {
        add(todo);
    });
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    add();
});

function add(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {  //暗黙的型変換 todoText > 0 がこの一文で可能。
        const li = document.createElement('li');

        li.textContent = input.value;
        li.classList.add('list-group-item')
        
        ul.appendChild(li);
        input.value = '';
        saveData();
    }
}

function saveData() {
    const lists = document.querySelectorAll('li');
    const todos = [];

    lists.forEach((list) => {
        todos.push(list.textContent);
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}