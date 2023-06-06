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
        todoText = todo.text;
    }
    
    if (todoText) {  //暗黙的型変換 todoText > 0 がこの一文で可能。
        const li = document.createElement('li');
        
        li.textContent = todoText;
        li.classList.add('list-group-item')
        
        // todoに内容があり、completedがついている場合取り消し線反映させる
        if(todo && todo.completed) {
            li.classList.add('text-decoration-line-through');
        }

        // 右クリックで項目削除
        li.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            li.remove();
            saveData();
        });
        
        // クリックで完了（取り消し線）
        li.addEventListener('click', function() {
            li.classList.toggle('text-decoration-line-through');
            saveData();
        })
        
        
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
        let todo = {
            text: list.textContent,
            completed: list.classList.contains('text-decoration-line-through')
        };
        todos.push(todo);
    });
    
    localStorage.setItem('todos', JSON.stringify(todos));
}