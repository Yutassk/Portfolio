"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const [chooseDate, setChooseDate] = useState(nextMonth);
  const [memos, setMemos] = useState("");

  type shift = { id: number; date: Date; memo: string; time: string };
  const shifts: shift[] = [{ id: 0, date: chooseDate, memo: "", time: "" }];
  const [shiftDate, setShiftDate] = useState<shift[]>(shifts);

  const tZone = [{ label: "終日" }, { label: "午前" }, { label: "午後" }];
  const [time, setTime] = useState("");

  //シフト希望の枠増やす
  const addDate = (a) => {
    setShiftDate([
      ...shiftDate,
      {
        id: shiftDate.length,
        date: chooseDate,
        memo: "",
        time: "",
      },
    ]);
    console.log(shiftDate);
  };

  const chooseTime = (cTime) => {
    setTime(cTime.label);
    console.log(time);
  };

  const handleDate = (date) => {
    setChooseDate(date);
    console.log(chooseDate);
  };

  //シフト提出して保存
  const enterShift = (date: Date, memo: string) => {
    console.log(shiftDate);
    console.log(`time:${time}`);
    console.log(`chooseDate:${chooseDate}`);
    console.log(`memos:${memos}`);
    console.log(`id${shiftDate.id}`);
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
            <li className="flex justify-around items-center" key={shift.id}>
              <DatePicker className="" selected={chooseDate} minDate={nextMonth} onChange={handleDate} dateFormat="MM月dd日" />

              <Select options={tZone} onChange={chooseTime} />

              <input type="text" placeholder="備考" onChange={(m) => setMemos(m.target.value)} value={memos} />
            </li>
          ))}
        </ul>
        <button
          className="bg-slate-200"
          onClick={() => {
            enterShift(chooseDate, memos);
          }}
        >
          てすと
        </button>
        <ul></ul>
      </main>
    </div>
  );
}
