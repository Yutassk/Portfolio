"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const today = new Date();
const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

const ShiftItem = ({ id, date, memos, time, tZoneOptions, handleDateChange, chooseTime, handleMemoChange }) => {
  return (
    <li className="flex justify-around items-center" key={id}>
      <DatePicker className="" selected={date} minDate={nextMonth} onChange={(date) => handleDateChange(id, date)} dateFormat="MM月dd日" />

      <Select options={tZoneOptions} onChange={(selectedOption) => chooseTime(id, selectedOption)} />

      <input type="text" placeholder="備考" onChange={(e) => handleMemoChange(id, e.target.value)} value={memos} />
    </li>
  );
};

export default function Home() {
  const [chooseDate, setChooseDate] = useState(nextMonth);
  const [memos, setMemos] = useState("");

  type shift = { id: number; date: Date; memos: string; time: string };
  const shifts: shift[] = [{ id: 0, date: chooseDate, memos: "", time: "" }];
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
        memos: "",
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
  };

  const updateShiftItem = (id, updateItem) => {
    setShiftDate((prevShifts) => prevShifts.map((shift) => (shift.id === id ? { ...shift, ...updateItem } : shift)));
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
          {/* {shiftDate.map((shift) => (
            <li className="flex justify-around items-center" key={shift.id}>
              <DatePicker className="" selected={chooseDate} minDate={nextMonth} onChange={handleDate} dateFormat="MM月dd日" />

              <Select options={tZone} onChange={chooseTime} />

              <input type="text" placeholder="備考" onChange={(m) => setMemos(m.target.value)} value={memos} />
            </li>
          ))} */}

          {shiftDate.map((shift) => (
            <ShiftItem
              key={shift.id}
              id={shift.id}
              date={shift.date}
              memos={shift.memos}
              time={shift.time}
              tZoneOptions={tZone}
              handleDateChange={handleDate}
              chooseTime={chooseTime}
              handleMemoChange={(id, memo) => updateShiftItem(id, { memos: memo })}
            />
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
