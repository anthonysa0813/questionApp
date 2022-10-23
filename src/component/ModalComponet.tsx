import React from "react";
import { ModalComponentGrid } from "../styles/main";

interface Prop {
  children: JSX.Element[] | JSX.Element;
}

const Modal = ({ children }: Prop) => {
  return <ModalComponentGrid>{children}</ModalComponentGrid>;
};

export default Modal;
