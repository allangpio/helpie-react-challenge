import React from "react";

import "./Step1.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Error from "../Error/Error";
import {
  setName,
  setLastName,
  setEmail,
  setPhone,
} from "../../store/rootSlice";

function normalizedPhoneNumber(value) {
  const input = value.replace(/[^\d]/g, "");
  const zip = input.substring(0, 2);
  const middle = input.substring(2, 7);
  const last = input.substring(7, 11);

  return (value = `(${zip}) ${middle} - ${last}`);
}

export const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    dispatch(setName(data.name));
    dispatch(setLastName(data.lastName));
    dispatch(setEmail(data.email));
    dispatch(setPhone(data.phone));
    e.target.reset();
    history.push("/step2");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Cadastro</h3>

        <div className="form-field">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            ref={register({ required: true, maxLength: 80 })}
          />
          {errors.name && errors.name.type === "required" && (
            <Error title="Este campo é obrigatório" />
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <Error title="O nome deve conter no máximo 80 caracteres" />
          )}
        </div>

        <div className="form-field">
          <label htmlFor="lastName">Sobrenome</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            ref={register({ required: true, maxLength: 100 })}
          />
          {errors.lastName && errors.lastName.type === "required" && (
            <Error title="Este campo é obrigatório" />
          )}
          {errors.lastName && errors.lastName.type === "maxLength" && (
            <Error title="O nome deve conter no máximo 80 caracteres" />
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && errors.email.type === "required" && (
            <Error title="Este campo é obrigatório" />
          )}
          {errors.phone && errors.email.type === "pattern" && (
            <Error title="Email inválido" />
          )}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            placeholder="(11) 91234 - 1234"
            inputMode="numeric"
            minLength="16"
            maxLength="17"
            name="phone"
            id="phone"
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizedPhoneNumber(value);
            }}
            ref={register({ required: true, minLength: 16, maxLength: 17 })}
          />
          {errors.phone && errors.phone.type === "required" && (
            <Error title="Este campo é obrigatório" />
          )}
          {errors.phone && errors.phone.type === "minLength" && (
            <Error title="O número deve ter no mínimo 10 dígitos" />
          )}
          {errors.phone && errors.phone.type === "maxLength" && (
            <Error title="O número deve ter no mínimo 11 dígitos" />
          )}
        </div>

        <button className="form-btn">Próximo</button>
      </form>
    </div>
  );
};
