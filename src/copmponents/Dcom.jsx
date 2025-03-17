import { useNavigate } from "react-router";

//
const jo = 8;
function chap(x) {
  let moh = x - jo;
  for (let index = 0; index < moh; index += 1) {
    console.log("hey feri");
  }
}
chap(100);

//
let oo = [1, 2, 3, "kk", () => {}];
function arrp(x) {
  if (Array.isArray(x) === true) {
    console.log(typeof x[3]);
  } else {
    console.log(`entry is not array`);
  }
}
arrp(oo);
//
function bozorgtar(a, c) {
  let x = prompt("bezan");
  let y = prompt("bezan");
  let con = Number(x, y);
  if (x > y) {
    console.log(`adad bozorgtar:${x}`);
  } else {
    console.log(`adad bozorgtar:${y}`);
  }
  console.log(typeof con);
}
// bozorgtar();
//
function maodel(x) {
  let num = Number(x);
  let zro = 0;
  for (zro; num <= zro; zro++) {
    // function indexer(y) {}
    console.log(num);
  }
}
maodel(5);
//
function chrt(x) {
  let bah = 0;
  let num = Number(x);
  if (num % 2 === bah) {
    console.log(`زوج است`);
  } else {
    console.log(`فرداست`);
  }
}
chrt(16);
//

function eshak(n1, n2, n3) {
  let x = Number(n1);
  let y = Number(n2);
  let z = Number(n3);
  let odd = 0;
  let even = 0;
  let taghsim1 = x % 2 === 0;
  let taghsim2 = y % 2 === 0;
  let taghsim3 = z % 2 === 0;
  if (taghsim1) {
    even++;
  } else {
    odd++;
  }
  if (taghsim2) {
    even++;
  } else {
    odd++;
  }
  if (taghsim3) {
    even++;
  } else {
    odd++;
  }
  console.log(`تعداد ارقام زوج :${even} و تعداد ارقام فرد: ${odd}`);
}
eshak(2, 4, 0);

const array = ["asxsaxsa sadsad saxd sd ss w sacvw ss"];
function arr(x) {
  const wordCount = x[0].split(" ").length;
  console.log(wordCount);
}
arr(array);

function maxtar(x) {
  let index = 0;
  if (index <= 150) {
    let plus = x + x;
    console.log(plus);
    index++;
  }
}
// maxtar(150);

function Betweennumberplus(x, y) {
  let sum = 0;
  if (x < y) {
    for (y >= x; (sum += x); x++) {
      // console.log(sum);
    }
  } else {
    console.error(`عدد اول باید کوچکتر از دومی باشد`);
  }
}
// Betweennumberplus(2, 6);

const Dcom = (e) => {
  const navigate = useNavigate();
  return <div>chtori?</div>;
};
export default Dcom;
