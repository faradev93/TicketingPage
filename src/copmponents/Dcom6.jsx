import { useState } from "react";

//     while
let index = 0;
while (index <= 40) {
  if (index % 5 === 0) {
    index++;
    continue;
  }
  if (index === 32) {
    console.log(`found number${index}`);
    break;
  }
  console.log(index);
  index++;
}
// Switch Case
let role;
switch (role) {
  case true:
    console.log("Welcome to My WebSite");
    break;
  case false:
    console.log("Gomsho Biron haromi");
    break;
  case undefined:
    console.log("To Ye Hackeri:))");
    break;
  default:
    console.log("Lotfan Register Konid");
    break;
}
// Object
let usersAI = [
  { id: 0, name: "Ali", lname: "Khanlo", age: 32, gender: "Male" },
  { id: 1, name: "Sara", lname: "Nasiri", age: 27, gender: "Female" },
  { id: 2, name: "Mahdi", lname: "Abdol", age: 25, gender: "Male" },
  { id: 3, name: "Zahra", lname: "Sadeghi", age: 21, gender: "Female" },
  { id: 4, name: "Hassan", lname: "EsmaelPour", age: 33, gender: "Male" },
  { id: 5, name: "Nima", lname: "Jafari", age: 29, gender: "Male" },
  { id: 6, name: "Leyla", lname: "Rostami", age: 26, gender: "Female" },
  { id: 7, name: "Mohammad", lname: "Shahbazian", age: 31, gender: "Male" },
  { id: 8, name: "Mina", lname: "Farahani", age: 28, gender: "Female" },
  { id: 9, name: "Arash", lname: "Rahmani", age: 24, gender: "Male" },
  { id: 10, name: "Shirin", lname: "Jafari", age: 30, gender: "Female" },
];
let found = false;
for (let item of usersAI) {
  if (item.id === 1 && item.lname.startsWith("N", 0)) {
    console.log(item.name);
    found = !found;
    break;
  }
}
if (!found) {
  console.log("Nadarim");
}
//

///

//Factory function
function createCircle(radius, testy) {
  return {
    x: 1,
    y: 1,
    radius,
    insvisible: testy,
    draw() {
      console.log(`Draw`);
    },
  };
}
let circle1 = createCircle(5, false);
console.log(circle1);
let circle2 = createCircle(55, true);
console.log(circle2);
//

//
const Dcom6 = (e) => {
  const [user, setuser] = useState({ name: "feri" });

  return (
    <div className=" flex justify-center items-center content-center font-extrabold font-mono p-2 h-[100px] w-full ">
      من هستم
    </div>
  );
};

export default Dcom6;
