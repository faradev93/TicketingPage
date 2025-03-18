//
let array = [
  { id: 0, name: "faramarz", lname: "Khanlou", age: 32 },
  { id: 1, name: "Mahdi", lname: "Nasiri", age: 27 },
  { id: 2, name: "Mahdi", lname: "Abdol", age: 28 },
  { id: 3, name: "Diba", lname: "Daemi", age: 22 },
  { id: 4, name: "Hossein", lname: "EsmaelPour", age: 33 },
];
let maxAge = 25;
let nameB = "";
let lnameB = "";
for (let Above25 of array) {
  if (Above25.age > 25 && Above25.age <= 30) {
    console.log(Above25.name, Above25.lname);
  }
}
for (let names of array) {
  if (names.name === "Mahdi") {
    console.log(
      `Name is:${names.name}- lastName is:${names.lname}-age is:${names.age}`
    );
  }
}
//
for (let agesOdd of array) {
  if (agesOdd.age % 2 !== 0) {
    console.log(`name fard is:${agesOdd.name}${agesOdd.lname}`);
  }
}
for (let NamesN of array) {
  if (NamesN.lname.startsWith("N")) {
    console.log(NamesN.name, NamesN.age);
  }
}
let bbb = "Nasiri";
console.log(bbb.startsWith("s", 2));
//
let youngest = Infinity;
let youngerName = "";
for (let Young of array) {
  if (Young.age <= youngest) {
    youngest = Young.age;
    youngerName = Young.name;
  }
}
console.log(`oni k javontare sennesh:${youngest} va name on:${youngerName}`);
//
let names = ["Ali", "Mahdi", "Arash", "Nima", "Amir", "Sara", "Ahmad"];

for (let namesStartWithA of names) {
  if (namesStartWithA.startsWith("A")) {
    console.log(namesStartWithA);
  }
}
//
let numbers = [10, 21, 34, 45, 56, 67, 73, 89, 12, 77, 50];
for (let odd of numbers) {
  if (odd % 2 !== 0) {
    if (odd > 50) {
      console.log(`This is a big odd number!${odd}`);
    }
  }
}
//
let people = [
  { name: "Ali", lname: "Ahmadi", age: 25 },
  { name: "Sina", lname: "Akbari", age: 19 },
  { name: "Reza", lname: "Baqeri", age: 32 },
  { name: "Sara", lname: "Asadi", age: 41 },
  { name: "Mohammad", lname: "Jafari", age: 29 },
  { name: "Hossein", lname: "Karimi", age: 38 },
];
for (let item of people) {
  if (item.lname.startsWith("A")) {
    console.log(`نام خانوادگی با A شروغ میشود:${item.name}`);
  }
  if (item.age % 2 !== 0 && item.name.length > 4) {
    console.log(`Name is:${item.name} & lastName: ${item.lname}`);
  }
  if (item.age > 20 && item.age < 40) {
    console.log(item.name);
  }
}

//
const Dcom5 = (e) => {
  return (
    <div>
      <div>hey</div>
    </div>
  );
};
export default Dcom5;
