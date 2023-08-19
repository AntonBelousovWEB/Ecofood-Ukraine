import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../global/Header";
import Main from "../global/Main";
import Footer from "../global/Footer";
import Cart from "../global/Cart";
import Form from "../global/Form";

function Root() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={[<Header />, <Main />, <Footer />]} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pay" element={<Form />} />
        </Routes>
    </Router>
  )
}
  
export default Root;