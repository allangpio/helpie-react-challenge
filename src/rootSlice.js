import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    name: "",
    lastName: "",
    email: "",
    phone: 0,
    cep: 0,
    address1: "",
    address2: "",
    birthdate: "",
    cpf: 0,
    income: 0,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setCep: (state, action) => {
      state.cep = action.payload;
    },
    setAddress1: (state, action) => {
      state.address1 = action.payload;
    },
    setAddress2: (state, action) => {
      state.address2 = action.payload;
    },
    setBirthdate: (state, action) => {
      state.birthdate = action.payload;
    },
    setCpf: (state, action) => {
      state.cpf = action.payload;
    },
    setIncome: (state, action) => {
      state.income = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;

export const {
  setAddress1,
  setAddress2,
  setBirthdate,
  setCep,
  setCpf,
  setEmail,
  setIncome,
  setLastName,
  setName,
  setPhone,
} = rootSlice.actions;
