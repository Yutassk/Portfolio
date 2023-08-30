"use client";
import React, { ChangeEvent, useState } from "react";
import ReactDatePicker from "react-datepicker";
import Select from "react-select";

const today = new Date();
const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

export const ShiftList = () => {
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

  //shiftDataの更新用関数
  const updateShiftItem = (id: number, property: string, value: string | Date) => {
    setShiftData((prevData) => prevData.map((item) => (item.id === id ? { ...item, [property]: value } : item)));
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

  //シフト提出して保存
  const enterShift = () => {
    console.log(shiftData);
  };

  return (
    <div>
      <h2>30秒でつくれる！カンタン出欠表</h2>
      <h3>イベント名</h3>
      <p>※今期もお疲れ様でした飲み会、打ち合わせなど</p>
      <input type="text" />
      <button className="bg-yellow-200" onClick={addDate}>
        ふやすぼたん
      </button>
      <ul className="mx-4">
        {shiftData.map((item) => (
          <li className="text-sm  max-w-lg flex justify-between items-center -z-50" key={item.id}>
            <ReactDatePicker className="w-24 p-2 border-slate-200 border" selected={item.date} minDate={nextMonth} onChange={(e) => shiftDate(item.id, e)} dateFormat="MM月dd日" />
            <Select className="text-sm " placeholder="時間帯" options={tZone} onChange={(selectedTime) => chooseTime(item.id, selectedTime)} />
            <input className="p-2 border-slate-200 border" id={`${item.id}`} type="text" placeholder="備考" onChange={(e) => shiftMemo(item.id, e)} />
          </li>
        ))}
      </ul>
      <div className="text-center my-4">
        <button className="bg-slate-200" onClick={enterShift}>
          希望シフトを送信する
        </button>
      </div>
    </div>
  );
};
