import DashBoard from "./Pages/Dashboard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transaction from "./Pages/transaction/Transaction";
import Support from "./Pages/Support/Support";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard/>} />
        <Route path="/transaction" element={<Transaction/>} />
         <Route path="/support" element={<Support/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
