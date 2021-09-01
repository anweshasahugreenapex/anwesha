//return true if duplicate object is there in the list else return false

const list = [
  {
    guardianId: "67a33f9a-bce6-42e2-b147-0e2882babf1c1",
    modeOfContactId: "986a8946-272a-4d4e-824b-cc81812867481",
    dateTimeOfContact: "1",
  },
  {
    guardianId: "67a33f9a-bce6-42e2-b147-0e2882babf1c2",
    modeOfContactId: "986a8946-272a-4d4e-824b-cc81812867482",
    dateTimeOfContact: "2",
  },
  {
    guardianId: "67a33f9a-bce6-42e2-b147-0e2882babf1c3",
    modeOfContactId: "986a8946-272a-4d4e-824b-cc81812867483",
    dateTimeOfContact: "3",
  },
  {
    guardianId: "67a33f9a-bce6-42e2-b147-0e2882babf1c3",
    modeOfContactId: "986a8946-272a-4d4e-824b-cc81812867483",
    dateTimeOfContact: "3",
  }
];

const valueArr = list.map(function (item) {
  return item.guardianId && item. modeOfContactId && item.dateTimeOfContact;
});
const isDuplicate = valueArr.some(function (item, idx) {
  return valueArr.indexOf(item) != idx;
});
console.log(isDuplicate);
