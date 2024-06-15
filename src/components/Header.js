import { React, useState } from "react";
import logo from "../assets/logo.svg";
import { FaUserAlt } from "react-icons/fa";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";


import Modal from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);


  const clickIoChevronDownOutlineHandler = () => {
    setShowModal(true);
  };

  const clickIoChevronUpOutlineHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="border bg-white">
    <div className="header flex justify-between items-center py-4 mx-36 relative">
      <img className="" src={logo} />
      <div className="flex justify-between w-[30%] items-center">
        <div className="flex gap-[60px] text-md font-medium">
          <h1>Dashboard</h1>
          <h1>FAQs</h1>
          <h1>Support</h1>
        </div>
      
          <div className="border rounded-full border-[#5a5ed7] flex items-center gap-1 p-3 px-4 avatar">
            <FaUserAlt className="text-[#5a5ed7]" />
            {!showModal && <IoChevronDownOutline onClick={clickIoChevronDownOutlineHandler} />}
            {showModal && <IoChevronUpOutline onClick={clickIoChevronUpOutlineHandler} />}
          </div>
      
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
    </div>
  );
};

export default Header;
