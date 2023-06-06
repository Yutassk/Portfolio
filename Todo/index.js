'use strict';
const $doc = document;
const $form = $doc.querySelector('#form')
const $input = $doc.querySelector('#input');
const $ul = $doc.querySelector('ul');

// エンター押したらinputのvalue取得
$form.addEventListener('submit', function (e) {
    e.preventDefault();
    add();
});
// 取得したvalueをli属性でulに追加
function add() {
    let todoText = $input.value;

    if (todoText) {
        const li = $doc.createElement('li');

        li.textContent = todoText;
        li.classList.add('list-group-item');

        $ul.appendChild(li);
        $input.value = '';
        saveData();
    }
}
// 画面を更新してもデータが消えないようにする


// 左クリックで取り消し線

// 右クリックで削除

// 右クリックでメニューが表示されないようにする

// データをローカルストレージに保存
const saveData = () => {
    const $li = $doc.querySelectorAll('li');
    const todos = [];

    $li.forEach((list) => {
        let todo = list.textContent;
        todos.push(todo);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    // localStorage.prop = todos;
}
// ローカルストレージからデータ取得
const todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
    todos.forEach((todo) => {
        add(todo);
    });
}

// ローカルストレージにデータが入っていればulに追加

