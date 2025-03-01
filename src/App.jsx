import { BrowserRouter, Route, Routes } from "react-router";
import Dcom from "./copmponents/Dcom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/feri" element={<Dcom/>}></Route>
        </Routes>
      </BrowserRouter>
      <div className="bg-amber-700">Salam</div>
    </div>
  );
}
