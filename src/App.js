import React from "react";

import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import { Step1 } from "./components/Step1/Step1";
import { Step2 } from "./components/Step2/Step2";
import { Step3 } from "./components/Step3/Step3";
import { Result } from "./components/Result/Result";
import Clients from "./components/Clients/Clients";

import logo from "./assets/logohelpie.svg";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const clients = [];

  return (
    <Provider store={store}>
      <div className="App">
        <img src={logo} alt="Logo Helpie" className="logo" />
        <BrowserRouter>
          <div className="container">
            <Sidebar />
            <Route path="/" exact component={Home} />
            <Route path="/step1" component={Step1} />
            <Route path="/step2" component={Step2} />
            <Route path="/step3" component={Step3} />
            <Route
              path="/result"
              render={() => <Result clientsList={clients} />}
            />
            <Route
              path="/clients"
              exact
              render={() => <Clients clientsList={clients} />}
            />
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
