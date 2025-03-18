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
  { id: 1, name: "KharoKhashak", lname: "sasx", age: 12 },
  { id: 2, name: "hassan", lname: "Rezakhanlou", age: 67 },
  { id: 3, name: "reza", lname: "asx", age: 19 },
];
for (let sen of arr2) {
  if (sen.age >= 30) {
    console.log(`Name: ${sen.name} LastName: ${sen.lname} Age: ${sen.age}`);
  }
}
for (let item of arr2) {
  if (item.lname === "sasx") {
    console.log(item.name);
  }
}
//
let oldestName = "";
let maxAge = 0;
for (let pp of arr2) {
  if (pp.age > maxAge) {
    maxAge = pp.age;
    oldestName = pp.name;
  }
}
console.log(`name is:${oldestName} & age is${maxAge}`);
//
let kamtarazTwenty = 20;
let nameAnig = "";
for (let personAbove of arr2) {
  if (personAbove.age < kamtarazTwenty) {
    kamtarazTwenty = personAbove.age;
    nameAnig = personAbove.name;
  }
}
console.log(`name in anig hast:${nameAnig}& sen on ham:${kamtarazTwenty}`);
console.log();
//
arr2.push({ id: 4, name: "Ali", lname: "Jamaica", age: 29 });
for (let chapJadid of arr2) {
  console.log(chapJadid);
}
//
const Dcom4 = (e) => {
  return <div>Eshak</div>;
};

export default Dcom4;
