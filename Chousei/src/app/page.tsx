"use client";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const [startDate, setStartDate] = useState(today);
  const [timezone, setTimezone] = useState("終日");
  const [isOpen, setIsOpen] = useState(false);
  const [memos, setMemos] = useState("");
  let nextId = 3;

  type shift = { id: number; memo: string };
  const shifts: shift[] = [{ id: 0, memo: "いーち" }];
  const [shiftDate, setShiftDate] = useState<shift[]>(shifts);

  const tZone = [{ label: "終日" }, { label: "午前" }, { label: "午後" }];

  //シフト希望の枠増やす
  const addDate = (a) => {
    // a.preventDefault();
    // nextId++;

    setShiftDate([
      ...shiftDate,
      {
        id: shiftDate.length,
        memo: `${shiftDate.length}番目の枠です`,
      },
    ]);
    console.log(shiftDate);
  };

  //時間帯選択の表示
  const openClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  //日付選んだらstateに保存して時間帯表示閉じる
  const timeChange = (tex) => {
    setTimezone(tex);
    setIsOpen(!isOpen);
  };

  //シフト提出して保存
  const enterShift = (date: Date, memo: string) => {
    console.log(shiftDate);
  };

  return (
    <div className="">
      <header className="flex justify-around items-center bg-green-600">
        <h2>調整さんクローン</h2>
        <p>
          カンタン出欠管理、日程調整ツール。
          <br />
          効率よくスケジュールを決めましょう。
        </p>
        <div className="flex bg-slate-100">
          <p>ログインなしでもご利用頂けますが、ログインするとより便利に！</p>
          <button>会員登録／ログイン</button>
          <button>お知らせ</button>
        </div>
      </header>

      <main className="bg-green-100">
        <h2>30秒でつくれる！カンタン出欠表</h2>
        <h3>イベント名</h3>
        <p>※今期もお疲れ様でした飲み会、打ち合わせなど</p>
        <input type="text" />
        <button className="bg-yellow-200" onClick={addDate}>
          ふやすぼたん
        </button>
        <ul className="">
          {shiftDate.map((shift) => (
            // <li key={shift.id}>{shift.memo}</li>

            <li className="flex justify-around items-center" key={shift.id}>
              <DatePicker className="" selected={nextMonth} minDate={nextMonth} onChange={(date) => setStartDate(date)} dateFormat="MM月dd日" value={startDate} />
              {/* <div> */}
              {/* <button className="relative" onClick={(e) => openClick(e)} onChange={(e) => timeChange(e)}>
                  {timezone}
                </button> */}

              <Select options={tZone} />

              {/* {isOpen && (
                  <div className="absolute bg-slate-200 ">
                    <div onClick={(tex) => timeChange(tex.target.innerText)}>終日</div>
                    <div onClick={(tex) => timeChange(tex.target.innerText)}>午前</div>
                    <div onClick={(tex) => timeChange(tex.target.innerText)}>午後</div>
                  </div>
                )} */}
              {/* </div> */}
              <input type="text" placeholder="備考" onChange={(m) => setMemos(m.target.value)} />
            </li>
          ))}
        </ul>
        <button
          className="bg-slate-200"
          onClick={() => {
            enterShift(startDate, memos);
          }}
        >
          てすと
        </button>
        <ul></ul>
      </main>
    </div>
  );
}
