import React from "react";

import { AiFillHome } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import {} from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Cadastrar",
    path: "/step1",
    icon: <AiOutlinePlus />,
    cName: "nav-text",
  },
  {
    title: "Clientes",
    path: "/clients",
    icon: <FiUsers />,
    cName: "nav-text",
  },
];
