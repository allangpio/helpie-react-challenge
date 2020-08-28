import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";

import "./Error.css";
// import { Container } from './styles';

function Error({ title }) {
  return (
    <p className="error-message">
      <RiErrorWarningFill />
      {title}
    </p>
  );
}

export default Error;
