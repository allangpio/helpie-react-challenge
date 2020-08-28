import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import Button from "../Button/Button";

import "./Clients.css";
import { useEffect } from "react";

function Clients() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // console.log(state);
  const clients = useSelector((state) => state);
  const [clientsList, setClientsList] = useState([]);
  useEffect(() => {
    setClientsList([...clientsList, clients]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="clients-container" id="clients">
      <h1>CLientes</h1>

      {clientsList.length === 0 && <p>Ainda não temos clientes cadastrados</p>}
      {console.log(clientsList)}
      {clientsList.map((client) => (
        <li key={client.email} onClick={() => setModalIsOpen(true)}>
          {client.name} {client.lastName}
          <Modal isOpen={modalIsOpen} ariaHideApp={false} className="modal">
            <div className="modal-container">
              <h4>
                {client.name} {client.lastName}
              </h4>
              <p>Email: {client.email}</p>
              <p>Telefone: {client.phone}</p>
              <p>CEP: {client.cep}</p>
              <p>Endereço 1: {client.address1}</p>
              <p>Endereço 2: {client.address2}</p>
              <p>Data de nascimento: {client.birthdate}</p>
              <p>CPF: {client.cpf} </p>
              <p>Renda mensal: {client.income} </p>
              <AiFillCloseCircle
                className="close"
                onClick={(e) => {
                  e.stopPropagation();
                  return setModalIsOpen(false);
                }}
              />
            </div>
          </Modal>
        </li>
      ))}
      <Button
        destination="/"
        styles="btn-secondary btn-home"
        title="Voltar para a home"
      />
    </div>
  );
}

export default Clients;
