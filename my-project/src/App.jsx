import { useState } from "react";
import Select from "react-select";

function App() {
  const tZone = [{ label: "終日" }, { label: "午前" }, { label: "午後" }];
  const [shiftData, setShiftData] = useState([
    {
      id: 0,
      date: "",
      memo: "",
      time: "",
    },
  ]);

  const updateShiftData = (id, property, value) => {
    setShiftData((prevData) => prevData.map((item) => (item.id === id ? { ...item, [property]: value } : item)));
  };

  const shiftDate = (id, date) => {
    // setShiftData((prevData) => prevData.map((item) => (item.id === id ? { ...item, date: date.target.value } : item)));
    updateShiftData(id, "date", date.target.value);
  };

  const shiftMemo = (id, memo) => {
    // setShiftData((prevData) => prevData.map((item) => (item.id === id ? { ...item, memo: memo.target.value } : item)));
    updateShiftData(id, "memo", memo.target.value);
  };

  const chooseTime = (id, selectedTime) => {
    // setShiftData((prevData) => prevData.map((item) => (item.id === id ? { ...item, time: selectedTime.label } : item)));
    updateShiftData(id, "time", selectedTime.label);
  };

  const addInputForm = () => {
    const newId = shiftData.length;
    setShiftData((prevData) => [...prevData, { id: newId, date: "", memo: "", time: "" }]);
  };

  const enterShift = () => {
    //日付未入力を省いて送信
    const filterData = shiftData.filter((item) => item.date !== "");
    console.log(filterData);
  };

  return (
    <div className="">
      {shiftData.map((item) => (
        <div key={item.id}>
          <input type="date" placeholder="日付" onChange={(e) => shiftDate(item.id, e)} />
          <input type="text" onChange={(e) => shiftMemo(item.id, e)} />
          <Select options={tZone} onChange={(selectedTime) => chooseTime(item.id, selectedTime)} />
        </div>
      ))}
      <button onClick={addInputForm}>ふやすぼたん</button>
      <button onClick={enterShift}>aiu</button>
    </div>
  );
}

export default App;
