import Dcom from "./Dcom";

const Dcom2 = (e) => {
  //
  let person = {
    name: "faramarz",
    lastname: "Rezakhanlou",
    age: "32",
    sexMale: true,
  };
  console.log(Object.values(person));
  function typer(x) {
    console.log(typeof x);
  }
  typer(person.sexMale);
  //

  function adad(x) {
    console.log(typeof x);
    console.log(typeof parseInt(x));
  }
  adad("56");
  let nums = [1, 2, 3, 4, 5];
  let persons = { name: "feri", lname: "khanlo", age: 32 };
  console.log(Object.keys(persons));

  let arr = ["feri", true, (e) => {}, false, 123, null];
  console.log(typeof arr[2]);
  //
  function peyma(x) {
    for (let i = 0; i <= x.length; i++) {
      console.log(typeof x[i]);
    }
  }

  let x = 55;
  let y = "55";
  console.log(x == 55);
  //
  function mohtat(x, y) {
    let tabdil = parseInt(x);
    console.log(typeof tabdil);
    if (tabdil === y) {
      console.log("Doroste");
    } else {
      console.log("غلطه");
    }
  }
  mohtat("55", 55);
  let authenticated = 1;
  let text = authenticated == true ? "Salam" : "Sikdir";
  console.log(text);

  let ProductCount = 5;
  let ProductPrice = 5000;
  let PersonWallet = 4999;
  let buy =
    ProductCount > 0 && PersonWallet > ProductPrice
      ? "خرید اتنجام شد "
      : "سیکدیر پول نداری";

  console.log(buy);
  let tedadKala = 5;
  let gheimat = 5500;
  let pooolz = 5400;
  let bekhar = tedadKala >= 6 || gheimat >= 5500;
  console.log(bekhar);
  console.log(1 & 2);
  //   let xx = 00000001;
  let hour = 10;
  if (hour > 6 && hour <= 9) console.log("صبح بخیر");
  let authcated = false;
  let chap = authcated === true ? "Salam" : "Gomsho Biron";
  console.log(typeof authcated);
  console.log(chap);
  let role = "admi2n";
  switch (role) {
    case "guest":
      console.log("Hello Guest");
      break;
    case "admin":
      console.log("Hello Admin KosKhol");
      break;
    default:
      console.log("هلو کصکش اوغلی");
      break;
  }
  if (role === "guest") {
    console.log("Hello Guest2");
  }else if(role==="admin"){
    console.log("Hello Admin KosKhol2");
  }else{console.log("سیکککککتیر");}
  return (
    <div>
      <div>
        {nums.map((nums) => {
          <Dcom />;
        })}
      </div>
    </div>
  );
};
export default Dcom2;
