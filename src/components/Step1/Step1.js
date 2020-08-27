import React from "react";

import "./Step1.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setName, setLastName, setEmail, setPhone } from "../../rootSlice";
// import { Container } from './styles';

export const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const name = useSelector((state) => state.name);
  const lastName = useSelector((state) => state.lastName);
  const email = useSelector((state) => state.email);
  const phone = useSelector((state) => state.phone);

  const { register, handleSubmit } = useForm({
    defaultValues: { name, lastName, email, phone },
  });

  const onSubmit = (data) => {
    dispatch(setName(data.name));
    dispatch(setLastName(data.lastName));
    dispatch(setEmail(data.email));
    dispatch(setPhone(data.phone));
    history.push("/step2");
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Cadastro</h3>

        <div className="form-group">
          <div className="form-field">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="form-field">
            <label htmlFor="lastName">Sobrenome</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Telefone</label>
          <input type="text" name="phone" id="phone" />
        </div>

        <button className="form-btn">Próximo</button>
      </form>
    </div>
  );
};
