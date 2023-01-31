import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import FirstPage from "./pages/FirstPage";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/secondpage" element={<SecondPage />} />
        <Route
          path="*"
          element={<h1 className=" text-red-700">Error 404 Page Not Found!</h1>}
        />
        <Route path="/secondpage/:id" element={<Detail />} />
        <Route
          path="/secondpage/:*"
          element={<h1 className=" text-red-700">Error 404 Page Not Found!</h1>}
        />
      </Routes>
    </>
  );
};

export default App;
