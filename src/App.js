import React from "react";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import { Step1 } from "./components/Step1/Step1";

import logo from "./assets/logohelpie.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo Helpie" className="logo" />
      <BrowserRouter>
        <div className="container">
          <Sidebar />
          <Route path="/" exact component={Home} />
          <Route path="/step1" exact component={Step1} />
          {/* <Route path="/step1" exact component={Step2} />
          <Route path="/step1" exact component={Step3} />
          <Route path="/result" exact component={Result} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
