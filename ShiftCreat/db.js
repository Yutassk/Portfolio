/**
 * DB接続用jsファイル（てすと）
 * 新規作成
 */

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "testuser",
  password: "testuser01",
  database: "shift_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL DB!");

  // テーブルのデータを全件取得
  const sql = "SELECT * FROM `tes1_user` WHERE 1";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    // 全レコード
    console.log("Result: ", result);
  });
});
