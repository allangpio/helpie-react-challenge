import React from "react";

import "./App.css";

import { Route, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Clients from "./pages/Clients/Clients";
import { Step1 } from "./components/Step1/Step1";
import { Step2 } from "./components/Step2/Step2";
import { Step3 } from "./components/Step3/Step3";
import { Result } from "./components/Result/Result";

import logo from "./assets/logohelpie.svg";

function App() {  

  return (
    <Provider store={store}>
      <div className="App">
        <img src={logo} alt="Logo Helpie" className="logo" />
        <HashRouter>
          <div className="container">
            <Sidebar />
            <Route path="/" exact component={Home} />
            <Route path="/step1" component={Step1} />
            <Route path="/step2" component={Step2} />
            <Route path="/step3" component={Step3} />
            <Route path="/result"component={Result} />
            <Route path="/clients" component={Clients} />
          </div>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
