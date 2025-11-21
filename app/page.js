"use client"

import "./css/buttons.css";

import Navbar from "./components/navbar";
import Index from "./components/index";
import Footer from "./components/footer";

export default function Home() {

  return (
    <>
      <Navbar />
      <div className="shadow-muted">
        <Index />  
      </div>     
      <Footer />
    </>
  );
}
