"use strict";

const $doc = document;
const $nextBtn = $doc.querySelector("#nextBtn");
const $prevBtn = $doc.querySelector("#prevBtn");

// Calendar
const weeks = ["日", "月", "火", "水", "木", "金", "土"];
const $week = $doc.querySelectorAll(".week");
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let startDate = new Date(year, month - 1, 1); //月初めの日付
let endDate = new Date(year, month, 0); //月末の日付
let endDateCount = endDate.getDate(); //月の末日
let startDay = startDate.getDay(); //月初めの曜日
const today = date.getDate(); //当日の日付
let $yearAndMonth = $doc.querySelector("#yearAndMonth"); //年月のh1書き換え用

const thisMonth = date.getMonth() + 1; //today削除用。月が変わっても当月を示す。
const thisYear = date.getFullYear(); //today削除用。月が変わっても当月を示す。

const $dateText = $doc.querySelectorAll("#dateText"); //日付入力のtd

const $shiftSelect = $doc.querySelector("#shiftSelect");
let shiftList = "";
let g = 1; //ボタンのname用

let key = []; //localStorage保存用
let value = [];

// 曜日表示
for (let i = 0; i < weeks.length; i++) {
  $week[i].textContent = weeks[i];
}

// カレンダーの日付生成
function calendar() {
  let dayCount = 1; //日付のカウント

  $yearAndMonth.textContent = `${year}年${month}月`;

  for (let d = 0; d < $dateText.length; d++) {
    if (d < startDay) {
      $dateText[d].textContent = "";
    } else if (dayCount > endDateCount) {
      $dateText[d].textContent = "";
    } else {
      $dateText[d].textContent = dayCount;
      dayCount++;
    }
  }

  if (thisMonth == month && thisYear == year) {
    $dateText.forEach((value) => {
      if (value.textContent == today) {
        $dateText[today + startDay - 1].classList.add("today");
      }
      if (value.textContent < today) {
        for (let i = 0; i < today; i++) {
          $dateText[i + startDay - 1].classList.add("gray");
        }
      }
    });
  } else {
    $dateText.forEach((value) => {
      if (value.classList.contains("today") == true) {
        $doc.querySelector(".today").classList.remove("today");
      }
      if (value.classList.contains("gray") == true) {
        $doc.querySelector(".gray").classList.remove("gray");
      }
    });
  }
}
// 次月へ進む
const next = () => {
  $nextBtn.addEventListener("click", (e) => {
    // 翌月以降でprevボタン出現
    if (thisMonth <= month && thisYear <= year) {
      $doc.querySelector("#prevBtn").classList.remove("hide");
    }

    if (month > 11) {
      year += 1;
      month = 1;
      startDate = new Date(year, month - 1, 1); //月初めの日付
      endDate = new Date(year, month, 0); //月末の日付
      endDateCount = endDate.getDate(); //月の末日
      startDay = startDate.getDay(); //月初めの曜日
    } else {
      month += 1;
      startDate = new Date(year, month - 1, 1); //月初めの日付
      endDate = new Date(year, month, 0); //月末の日付
      endDateCount = endDate.getDate(); //月の末日
      startDay = startDate.getDay(); //月初めの曜日
    }
    e.preventDefault();

    calendar();
  });
};
// 前月へ戻る
const prev = () => {
  $prevBtn.addEventListener("click", (e) => {
    // 当月になったらprevボタン隠す
    if (thisMonth >= month - 1 && thisYear >= year) {
      //クリック時点で判断されるためmonth-1
      $doc.querySelector("#prevBtn").classList.add("hide");
    }

    if (month < 2) {
      year -= 1;
      month = 12;
      startDate = new Date(year, month - 1, 1); //月初めの日付
      endDate = new Date(year, month, 0); //月末の日付
      endDateCount = endDate.getDate(); //月の末日
      startDay = startDate.getDay(); //月初めの曜日
    } else {
      month -= 1;
      startDate = new Date(year, month - 1, 1); //月初めの日付
      endDate = new Date(year, month, 0); //月末の日付
      endDateCount = endDate.getDate(); //月の末日
      startDay = startDate.getDay(); //月初めの曜日
    }
    e.preventDefault();

    calendar();
  });
};

// シフト入力ボタンを押したら入力項目表示
const $inputShiftBtn = $doc.querySelector("#inputShiftBtn");
$doc.querySelector("#hidden").style.display = "none";
$inputShiftBtn.addEventListener("click", () => {
  $inputShiftBtn.style.display = "none";
  $doc.querySelector("#hidden").style.display = "block";
});

// 日付選択したら下に表示。休暇の時間帯選んでもらう。
function shift(shiftReq) {
  shiftList += "<tr>";
  shiftList += "<td>";
  shiftList += shiftReq;
  shiftList += `<input type="radio" name="kouho${[
    g,
  ]}" value="終日" checked = true>終日`;
  shiftList += `<input type="radio" name="kouho${[g]}" value="午前">午前`;
  shiftList += `<input type="radio" name="kouho${[g]}" value="午後">午後`;

  shiftList += "</td>";
  shiftList += "</tr>";

  $shiftSelect.innerHTML = shiftList;
}

// 選択した日付をテキストエリアに入力
function dateSelect() {
  $dateText.forEach((select) => {
    select.addEventListener("click", (p) => {
      let textDate = new Date(year, month - 1, p.target.textContent);
      textDate = textDate.getDay();
      let shiftReq = `${month}/${p.target.textContent} (${weeks[textDate]})`;
      p.target.classList.add("gray");
      shift(shiftReq);
      key.push(shiftReq);
      g++;
    });
  });
}

// ラジオボタンの選択されているvalueを取得
function getRadioValue() {
  $doc.querySelector("#submissionBtn").addEventListener("click", () => {
    let row = $shiftSelect.rows.length; //候補日程の行数取得
    for (let nc = 1; nc < row + 1; nc++) {
      $doc.querySelectorAll(`input[name=kouho${nc}]`).forEach((elm) => {
        if (elm.checked) {
          value.push(elm.value);
          save();
        }
      });
    }
  });
}

// ローカルストレージ保存
function save() {
  for (let s = 0; s < key.length; s++) {
    localStorage.setItem(key[s], value[s]);
  }
}

calendar();
next();
prev();

dateSelect();

getRadioValue();

// URL発行
const $shiftUrlBtn = $doc.querySelector("#shiftUrlBtn");
function generateURL() {
  $shiftUrlBtn.addEventListener("click", () => {
    const uniqueId = generateUniqueId();
    const url = `https://example.com/${uniqueId}`;
    window.location.href = url;
    console.log(url);
  });
}
