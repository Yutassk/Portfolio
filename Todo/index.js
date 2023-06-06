'use strict';
const $doc = document;
const $input = $doc.querySelector('#input');

// エンター押したらinputのvalue取得
$input.addEventListener('submit', function() {
    console.log($input.value);
});


// 画面を更新してもデータが消えないようにする

// 取得したvalueをli属性でulに追加

// 左クリックで取り消し線

// 右クリックで削除

// 右クリックでメニューが表示されないようにする

// クリックしたらデータをローカルストレージに保存

// ローカルストレージからデータ取得

// ローカルストレージにデータが入っていればulに追加

