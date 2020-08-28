import React from "react";

import "./Home.css";
import Button from "../Button/Button";

// import { Container } from './styles';

function Home() {
  return (
    <div className="home">
      <h1>
        Para facilitar a listagem de <span>clientes</span>
      </h1>
      <p className="subheading">
        Em poucos passos você pode cadastrar e encontrar clientes de forma
        eficiente
      </p>
      <div className="btn-container">
        <Button destination="/step1" styles="btn-primary" title="+Cadastrar" />
        <Button
          destination="/clients"
          styles="btn-secondary"
          title="Clientes"
        />
      </div>
    </div>
  );
}

export default Home;
