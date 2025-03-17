const person = { name: "feri", age: 32 };

const colors = ["red", "green", "pinky", "blue"];
//
let adad = 1;
while (adad <= 40) {
  if (adad === 30) {
    break;
  }
  if (adad % 6 === 0) {
    adad++;
    continue;
  }
  if (adad === 15) {
    console.log(`Found Number ${adad}`);
  }
  // console.log(`javab:${adad}`);
  adad++;
}
const persons = { name: "majod", lastname: "Rezakhalou", age: 30 };
for (let key in persons) {
  console.log(persons[key]);
}

// const obj = {
//   11: { name: "masoud" },
//   20: { name: "feri" },
// };
// console.log(obj[20]);

// const arr = [
//   { id: 11, name: "masoud" },
//   { id: 30, name: "feri" },
//   { id: 20, name: "feri" },
// ];
// for (let item of arr) {
//   if (item.id === 20) {
//     console.log(item.name);
//   }
// }
let arr = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

let obj = {
  0: { name: "feri", lastname: "Khanlo" },
  1: { name: "mas", lastname: "Khanlsaxo" },
  2: { name: "12", lastname: "asx2" },
  3: { name: "4233", lastname: "sax" },
  4: { name: "34", lastname: "saxffef" },
};

for (let value of arr) {
  if (value.id === 11) {
    console.log(value.email);
  }
}
console.log(obj[4].lastname);
//
for(let keys in obj){
    console.log(obj[1].lastname);
}

//
const Dcom3 = (e) => {
  return (
    <div>
      <div>hello feri</div>
    </div>
  );
};
export default Dcom3;
