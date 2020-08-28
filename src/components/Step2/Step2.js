import React from "react";

import "./Step2.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setCep, setAddress1, setAddress2 } from "../../store/rootSlice";
import Error from "../Error/Error";

function normalizedCEP(value) {
  const input = value.replace(/[^\d]/g, "");
  const first = input.substring(0, 5);
  const last = input.substring(5, 8);

  return (value = `${first} - ${last}`);
}

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    dispatch(setCep(data.cep));
    dispatch(setAddress1(data.address1));
    dispatch(setAddress2(data.address2));
    e.target.reset();
    history.push("/step3");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Cadastro</h3>

        <div className="form-field">
          <label htmlFor="cep">CEP</label>
          <input
            type="zip"
            placeholder="12345 - 123"
            inputMode="numeric"
            minLength="11"
            name="cep"
            id="cep"
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizedCEP(value);
            }}
            ref={register({ required: true, minLength: 11 })}
          />
          {errors.cep && errors.cep.type === "required" && (
            <Error title="Este campo é obrigatório" />
          )}
          {errors.cep && errors.cep.type === "minLength" && (
            <Error title="O número deve ter 8 dígitos" />
          )}
        </div>

        <div className="form-field">
          <label htmlFor="address1">Endereço 1</label>
          <input
            type="text"
            id="address1"
            name="address1"
            ref={register({ required: true })}
          />
          {errors.address1 && <Error title="Este campo é obrigatório" />}
        </div>

        <div className="form-field">
          <label htmlFor="address2">Endereço 2</label>
          <input type="text" id="address2" name="address2" ref={register} />
        </div>

        <button className="form-btn">Próximo</button>
      </form>
    </div>
  );
};
