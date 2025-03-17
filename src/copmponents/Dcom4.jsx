//
let obj = {
  0: { name: "feri", lastname: "Khanlo" },
  1: { name: "mas", lastname: "Khanlsaxo" },
  2: { name: "12", lastname: "asx2" },
  3: { name: "4233", lastname: "sax" },
  4: { name: "fara", lastname: "saxffef", age: 32 },
};

// console.log(obj[4]);
let arr2 = [
  { id: 0, name: "feri", lname: "Khanlo", age: 32 },
  { id: 1, name: "ksak", lname: "sasx", age: 12 },
  { id: 2, name: "hassan", lname: "fs", age: 67 },
  { id: 3, name: "sax", lname: "asx", age: 22 },
];
for (let sen of arr2) {
  if (sen.age >= 30) {
    console.log(`نام:${sen.name} نام خانوادگی:${sen.lname}سن: ${sen.age}`);
  }
}
for (let item in arr2) {
  if (item.lname === "sasx") {
    console.log(item.name);
  }
}
//
const Dcom4 = (e) => {
  return <div>Eshak</div>;
};
export default Dcom4;
