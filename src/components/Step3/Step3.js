import React from "react";

import "./Step3.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setBirthdate, setCpf, setIncome } from "../../store/rootSlice";
import Error from "../Error/Error";

function normalizedCPF(value) {
  const input = value.replace(/[^\d]/g, "");
  const first = input.substring(0, 3);
  const middle1 = input.substring(3, 6);
  const middle2 = input.substring(6, 9);
  const last = input.substring(9, 11);

  return (value = `${first}.${middle1}.${middle2}/${last}`);
}

function normalizedIncome(value) {
  const input = value.replace(/[^\d]/g, "");

  return input ? (value = `R$ ${parseFloat(input).toLocaleString("en")}`) : "";
}

export const Step3 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(setBirthdate(data.birthdate));
    dispatch(setCpf(data.cpf));
    dispatch(setIncome(data.income));

    history.push("/result");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Cadastro</h3>

        <div className="form-field">
          <label htmlFor="birthdate">Data de Nascimento</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            ref={register({ required: true })}
          />
          {errors.birthdate && <Error title="Este campo é obrigatório" />}
        </div>

        <div className="form-field">
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            inputMode="numeric"
            placeholder="000.000.000/00"
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizedCPF(value);
            }}
            ref={register({ required: true, minLength: 14 })}
          />
          {errors.cpf && errors.cpf.type === "required" && (
            <Error title="Este campo é obrigatório" />
          )}
          {errors.cpf && errors.cpf.type === "minLength" && (
            <Error title="O CPF deve conter 11 caracteres" />
          )}
        </div>

        <div className="form-field">
          <label htmlFor="income">Renda mensal</label>
          <input
            type="text"
            step="100"
            id="income"
            name="income"
            inputMode="numeric"
            placeholder="R$2.000"
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizedIncome(value);
            }}
            ref={register({ required: true })}
          />
        </div>

        <button className="form-submit">Salvar</button>
      </form>
    </div>
  );
};
