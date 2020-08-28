import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

// import { Container } from './styles';

function Button({ destination, styles, title }) {
  return (
    <Link to={destination} className={styles}>
      {title}
    </Link>
  );
}

export default Button;
