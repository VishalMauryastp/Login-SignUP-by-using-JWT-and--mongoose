import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OurUsers from "./Pages/OurUsers";
import Home from "./Pages/Home";
import OurProducts from "./Pages/OurProducts";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PrivateRoutes from "./utill/PriveteRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-products" element={<OurProducts />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/about" element={<About />} />
            <Route path="/our-users" element={<OurUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={2000} hideProgressBar={true} />
    </>
  );
};
export default App;
