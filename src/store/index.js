import { createStore } from "redux";

// function formReducer() {
//   return {};
// }

const INITAL_STATE = {
  clientsLits: [
    {
      name: "Allan",
      lastName: "Gaia",
      email: "gpioallan@gmail.com",
      phone: "(11) 96350-0589",
      cep: "01537 - 000",
      address1: "Rua Iquiririm n328",
      address2: "Teste",
      cpf: "32132132132",
      bithdate: "07/08/1991",
      income: "R$2.000",
    },
  ],
  client: {
    name: "Allan",
    lastName: "Gaia",
    email: "gpioallan@gmail.com",
    phone: "(11) 96350-0589",
    cep: "01537 - 000",
    address1: "Rua Iquiririm n328",
    address2: "Teste",
    cpf: "32132132132",
    bithdate: "07/08/1991",
    income: "R$2.000",
  },
};

function reducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case "ADD_NAME":
      return {
        ...state,
        client: Object.assign({ name: action.name }, state.client),
      };
    case "ADD_LASTNAME":
      return {
        ...state,
        client: Object.assign({ name: action.lastName }, state.client),
      };
    case "ADD_EMAIL":
      return {
        ...state,
        client: Object.assign({ email: action.email }, state.client),
      };
    case "ADD_CEP":
      return {
        ...state,
        client: Object.assign({ cep: action.cep }, state.client),
      };
    case "ADD_ADDRESS1":
      return {
        ...state,
        client: Object.assign({ address1: action.address1 }, state.client),
      };
    case "ADD_ADDRESS2":
      return {
        ...state,
        client: Object.assign({ address2: action.address2 }, state.client),
      };
    case "ADD_PHONE":
      return {
        ...state,
        client: Object.assign({ phone: action.phone }, state.client),
      };
    case "ADD_BIRTHDATE":
      return {
        ...state,
        client: Object.assign({ birthdate: action.birthdate }, state.client),
      };
    case "ADD_CPF":
      return {
        ...state,
        client: Object.assign({ cpf: action.cpf }, state.client),
      };
    case "ADD_INCOME":
      return {
        ...state,
        client: Object.assign({ income: action.income }, state.client),
      };
    case "ADD_CLIENT":
      return { ...state, clientsList: [...state.clientsList, action.client] };
    default:
      return state;
  }
}

// function reducer() {
//   return {
//     clients: [
//       {
//         name: "Allan",
//         lastName: "Gaia",
//         email: "gpioallan@gmail.com",
//         phone: "(11) 96350-0589",
//         cep: "01537 - 000",
//         address1: "Rua Iquiririm n328",
//         address2: "Teste",
//         cpf: "32132132132",
//         bithdate: "07/08/1991",
//         income: "R$2.000",
//       },
//     ],
//   };
// }

const store = createStore(reducer);

export default store;
