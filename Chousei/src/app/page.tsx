"use client";
import { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const today = new Date();
const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

export default function Home() {
  const tZone = [{ label: "終日" }, { label: "午前" }, { label: "午後" }];
  type shift = { id: number; date: Date; memo: string; time: string; filingDate: Date };
  const [shiftData, setShiftData] = useState<shift[]>([
    {
      id: 0,
      date: nextMonth,
      memo: "",
      time: "",
      filingDate: today,
    },
  ]);

  const updateShiftItem = (id: number, property: string, value: string | Date) => {
    setShiftData((prevData) => prevData.map((item) => (item.id === id ? { ...item, [property]: value } : item)));
  };

  //シフト希望の枠増やす
  const addDate = () => {
    setShiftData([
      ...shiftData,
      {
        id: shiftData.length,
        date: nextMonth,
        memo: "",
        time: "",
        filingDate: today,
      },
    ]);
  };

  const shiftDate = (id: number, date: Date | null) => {
    if (date !== null) {
      updateShiftItem(id, "date", date);
    }
  };

  const chooseTime = (id: number, selectedTime: { label: string } | null) => {
    if (selectedTime !== null) {
      updateShiftItem(id, "time", selectedTime.label);
    }
  };

  const shiftMemo = (id: number, memo: ChangeEvent<HTMLInputElement>) => {
    updateShiftItem(id, "memo", memo.target.value);
  };

  //シフト提出して保存
  const enterShift = () => {
    console.log(shiftData);
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
          {shiftData.map((item) => (
            <li className="flex justify-around items-center" key={item.id}>
              <DatePicker selected={item.date} minDate={nextMonth} onChange={(e) => shiftDate(item.id, e)} dateFormat="MM月dd日" />
              <Select options={tZone} onChange={(selectedTime) => chooseTime(item.id, selectedTime)} />
              <input type="text" placeholder="備考" onChange={(e) => shiftMemo(item.id, e)} />
            </li>
          ))}
        </ul>
        <button className="bg-slate-200" onClick={enterShift}>
          てすと
        </button>
        <ul></ul>
      </main>
    </div>
  );
}
