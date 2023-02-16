import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import Login from "./pages/Login";
import BranchReg from "./pages/BranchReg/index";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerRegister from "./pages/CustomerReg";
import BankReg from "./pages/BankReg";
import Home from "./pages/HomePage";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <>
     <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/branch" element={<BranchReg />} />
            <Route path="/customer" element={<CustomerRegister />} />
            <Route path="/bank" element={<BankReg />} />
          </Routes>
        </BrowserRouter>
        
      </DataProvider>
    </>
  );
}

export default App;
