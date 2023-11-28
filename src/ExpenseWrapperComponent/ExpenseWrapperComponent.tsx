import React from "react";
import { Navbar } from "./navbar";
import { Route, Routes } from "react-router-dom";
import Expenses from "../expenses/expenses";
import Admin from "../admin/admin";
import About from "../about/about";
import Footer from "./footer";
import "./expenseWrapperComponent.scss"


function ExpenseWrapperComponent() {
  return <div><Navbar/>
  <div className="ExpenseContainer">
  <Routes>
  <Route path="/expenses" element={<Expenses/>}></Route>
  <Route path="/admin" element={<Admin/>}></Route>
  <Route path="/about" element={<About/>}></Route>


  </Routes>
  </div>
  <Footer/>
  </div>;
}

export default ExpenseWrapperComponent;
