import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedin,
//   faBehanceSquare,
// } from "@fortawesome/free-brands-svg-icons";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;

  title: string;
  subtitle: string;
  image: string;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  image,
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${isOpen ? "" : "hidden"}`}
    >
      <div
        className="absolute inset-0 bg-gray-800 opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-md z-10">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Member Profile</h2>
          <button
            onClick={onClose}
            className="rounded-full flex items-center justify-center text-white bg-gray-50 hover:bg-gray-300 px-3 py-2"
          >
            {/* <FontAwesomeIcon icon={faXmark} style={{ color: "#000000" }} /> */}
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt="member"
            className="w-[240px] content-center"
          />
        </div>
        <p className="text-xl font-semibold mb-2 text-center mt-2 text-[16px] leading-[26px] font-[500]">
          {title}
        </p>
        <p className="text-gray-600 text-[14px] text-center leading-[22px] font-[400] uxmm-text-color">
          {subtitle}
        </p>
        <div className="flex space-x-4 items-center justify-center">
          <button className="text-black border-[1px] border-black px-3 py-1 rounded-lg">
            {/* <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#075ef2" }}
              className="text-[24px]"
            />{" "} */}
            <span className="text-[16px] leading-[26px] font-[400]">
              {" "}
              LinkedIn
            </span>
          </button>
          <button className="text-black border-[1px] border-black px-3 py-1 rounded-lg">
            {/* <FontAwesomeIcon
              icon={faBehanceSquare}
              style={{ color: "#000000" }}
              className="text-[24px]"
            />{" "} */}
            <span className="text-[16px] leading-[26px] font-[400]">
              {" "}
              Behance
            </span>
          </button>
        </div>
        <div className="w-[550px]">
          <p className="text-gray-600 text-[16px] leading-[26px] font-[400]">
            I’ve been in the Information & Communication Technology field since
            2001 and formal professional experiences of product & project design
            management, enterprise applications and service design especially in
            Digital Products. I'm currently as UX Consultant of S2T Software
            Company (Singapore) and also a founder of UXMM Community
            Organization (UXMM). UXMM is a non-profit organization building the
            only career growth platform focused on providing international
            technical knowledge, educational resources and passion for Product
            design, User Experience and User Interface designer across in
            Myanmar. .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
