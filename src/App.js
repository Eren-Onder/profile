import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./Components/header";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="App">
      <Header />

      <Navbar />

      <Banner />
    </div>
  );
}

export default App;
