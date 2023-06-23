const memberRequests = {
  member1: {
    availableDates: ["2023-05-01", "2023-05-10"],
    departments: ["A", "B"], // メンバーが担当可能な部署
    shiftPattern: ["早番", "遅番"], // メンバーの変形勤務パターン
  },
  member2: {
    availableDates: ["2023-05-02", "2023-05-09"],
    departments: ["B", "C"],
    shiftPattern: ["早番", "当直"],
  },
  // 他のメンバーの設定
};

function createShiftSchedule() {
  const shiftSchedule = {};

  const startDate = new Date("2023-05-01");
  const endDate = new Date("2023-05-31");

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().split("T")[0];

    const availableMembers = [];
    for (const member in memberRequests) {
      if (
        memberRequests[member].availableDates.includes(dateStr) &&
        memberRequests[member].departments.includes("A")
      ) {
        availableMembers.push(member);
      }
    }

    if (availableMembers.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableMembers.length);
      const assignedMember = availableMembers[randomIndex];
      shiftSchedule[dateStr] = {
        member: assignedMember,
        shift: getRandomShift(memberRequests[assignedMember].shiftPattern),
      };
      // 割り当てたメンバーを休み希望から削除するなどの処理を追加することも可能です
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  for (const dateStr in shiftSchedule) {
    const assignedMember = shiftSchedule[dateStr].member;
    const assignedShift = shiftSchedule[dateStr].shift;

    // メンバーの休み希望から当該日を削除する
    if (memberRequests[assignedMember]) {
      const index =
        memberRequests[assignedMember].availableDates.indexOf(dateStr);
      if (index > -1) {
        memberRequests[assignedMember].availableDates.splice(index, 1);
      }
    }

    // 部署のシフトカウントを更新する
    const department = memberRequests[assignedMember].departments[0];
    if (departmentShiftCounts[department][assignedShift]) {
      departmentShiftCounts[department][assignedShift]++;
    } else {
      departmentShiftCounts[department][assignedShift] = 1;
    }
  }

  return shiftSchedule;
}

function getRandomShift(shiftPattern) {
  const randomIndex = Math.floor(Math.random() * shiftPattern.length);
  return shiftPattern[randomIndex];
}

// シフトスケジュールの作成
const shiftSchedule = createShiftSchedule();
console.log(shiftSchedule);
