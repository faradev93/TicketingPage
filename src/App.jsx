import { BrowserRouter, Route, Routes } from "react-router";
import Dcom from "./copmponents/Dcom";
import Dcom2 from "./copmponents/Dcom2";
import Dcom3 from "./copmponents/Dcom3";
import Dcom4 from "./copmponents/Dcom4";
import Dcom5 from "./copmponents/Dcom5";
import Dcom6 from "./copmponents/Dcom6";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/testjs3" element={<Dcom4 />}></Route>
          <Route path="/dcom" element={<Dcom />}></Route>
          <Route path="/testjs" element={<Dcom2 />}></Route>
          <Route path="/testjs2" element={<Dcom3 />}></Route>
          <Route path="/testjs3" element={<Dcom4 />}></Route>
          <Route path="/objectstamrin" element={<Dcom5 />}></Route>
          <Route path="/jsexcercise" element={<Dcom6 />}></Route>
        </Routes>
      </BrowserRouter>
      <div className="bg-amber-700">Salam</div>
    </div>
  );
}
