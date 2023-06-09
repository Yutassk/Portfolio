'use strict';
const $doc = document;
const $form = $doc.querySelector('#form')
const $input = $doc.querySelector('#input');
const $ul = $doc.querySelector('ul');

// ローカルストレージからデータ取得
const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
    todos.forEach((todo) => {
        add(todo);
    });
}

// エンター押したらinputのvalue取得
$form.addEventListener('submit', function (e) {
    e.preventDefault();
    add();
});

// 取得したvalueをli属性でulに追加
function add(todo) {
    let todoText = $input.value;

    // localstrageにデータがあればTodoに追加する
    if(todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const li = $doc.createElement('li');

        li.textContent = todoText;
        li.classList.add('list-group-item');

        if(todo && todo.completed) {
            li.classList.add('text-decoration-line-through');
        }

        // 左クリックで取り消し線
        li.addEventListener('click', function() {
            this.classList.toggle('text-decoration-line-through');
            saveData();
        });

        // 右クリックで削除
        li.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            this.remove();
            saveData();
        });

        $ul.appendChild(li);
        $input.value = '';
        saveData();
    }
}

// データをローカルストレージに保存

function saveData() {
    const $li = $doc.querySelectorAll('li');
    const todos = [];

    $li.forEach((list) => {
        let todo = {
            text: list.textContent,
            completed: list.classList.contains('text-decoration-line-through'),
        };
        todos.push(todo);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

/*
const texts = ['abc'];

if(texts.length <= 100 && texts.length > 1){
texts.forEach(function (text) {
    console.log(text);
})
}

console.log(texts);*/