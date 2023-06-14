import React from "react";
import ReactDOM  from "react-dom/client";
import './css/styles.css';

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Tours } from "./components/Tours";
import { Footer } from "./components/Footer";


function App(){
    return <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Tours/>
      <Footer/>
    </>
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)