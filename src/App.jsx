import { BrowserRouter, Route, Routes } from "react-router";
import Dcom from "./copmponents/Dcom";
import Dcom2 from "./copmponents/Dcom2";
import Dcom3 from "./copmponents/Dcom3";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dcom" element={<Dcom />}></Route>
          <Route path="/testjs" element={<Dcom2 />}></Route>
          <Route path="/testjs2" element={<Dcom3 />}></Route>
        </Routes>
      </BrowserRouter>
      <div className="bg-amber-700">Salam</div>
    </div>
  );
}
