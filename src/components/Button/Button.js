import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

// import { Container } from './styles';

function Button({ destination, style, title }) {
  return (
    <Link to={destination} className={style}>
      {title}
    </Link>
  );
}

export default Button;
