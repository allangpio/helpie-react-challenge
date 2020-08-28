import React from "react";

import "./Result.css";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import { BsCheckCircle } from "react-icons/bs";

export const Result = ({ clientsList }) => {
  const state = useSelector((state) => state);

  clientsList.push(Object.assign({}, state));

  return (
    <div className="form-container result">
      <h3>Cadastro realizado com sucesso!</h3>
      <BsCheckCircle className="success-icon" />
      <Button
        destination="/"
        styles="btn-secondary"
        title="Voltar para a home"
        className="btn-result"
      />
    </div>
  );
};
