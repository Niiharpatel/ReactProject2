import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutCom from "../UI/Components/LayoutCom/LayoutCom";
import Home from "../UI/Pages/HomePage/Home";
import About from "../UI/Pages/AboutPage/About";
import Contact from "../UI/Pages/ContactPage/Contact";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutCom />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
