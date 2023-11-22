import React from "react";
import { Navbar } from "./navbar";
import { Route, Routes } from "react-router-dom";
import Expenses from "../expenses/expenses";
import Admin from "../admin/admin";
import About from "../about/about";


function Home() {
  return <div><Navbar/>
  
  <Routes>
  <Route path="/expenses" element={<Expenses/>}></Route>
  <Route path="/admin" element={<Admin/>}></Route>
  <Route path="/about" element={<About/>}></Route>


  </Routes>
  <h4> HOME OF THE APP</h4>
  </div>;
}

export default Home;
