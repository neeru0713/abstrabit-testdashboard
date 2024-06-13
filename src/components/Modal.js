import React from "react";
import userIcon from "../assets/userIcon.svg";
import FDsIcon from "../assets/FDsIcon.svg";
import Graph from "../assets/Graph.svg";
import logOut from "../assets/logOut.svg";
const Modal = ({ showModal, setShowModal }) => {
  return (
    showModal && (
      <div className="border absolute right-0 top-20 px-8 py-6 flex flex-col border rounded-lg gap-4 shadow shadow-lg">
        <div className="flex gap-3">
          <img src={userIcon} />
          <h1>My Profile</h1>
        </div>
        <div className="flex gap-3">
          <img src={FDsIcon} />
          <h1>My FDs</h1>
        </div>
        <div className="flex gap-3">
          <img src={Graph} />
          <h1>My Transaction</h1>
        </div>
        <div className="flex gap-3">
          <img src={logOut} />
          <h1>Logout</h1>
        </div>
      </div>
    )
  );
};

export default Modal;
