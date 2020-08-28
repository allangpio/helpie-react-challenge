import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

// import { Container } from './styles';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/step1">+Cadastar</Link>
      <Link to="/clients">Clientes</Link>
    </div>
  );
}

export default Sidebar;
