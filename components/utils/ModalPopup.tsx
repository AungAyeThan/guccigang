import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  image: string;
  about: string;
  link: Record<string, string>;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  image,
  about,
  link,
}) => {
  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Modal backdrop */}
      <div
        className="absolute inset-0 bg-gray-800 opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md z-10 w-full max-w-md mx-4">
        {/* Modal header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[32px] leading-[42px] font-[700] font-plusJakarta">
            Member Profile
          </h2>
          <button
            onClick={onClose}
            className="rounded-full flex items-center justify-center text-gray-700 bg-gray-200 hover:bg-gray-300 p-2"
            aria-label="Close modal"
          >
            X
          </button>
        </div>

        {/* Modal image */}
        <div className="flex items-center justify-center mb-4">
          <img
            src={image}
            alt="member"
            className="w-[200px] h-auto max-w-full object-cover"
          />
        </div>

        <p className="text-[24px] text-center leading-[38px] font-[700] mb-2 text-customgray font-plusJakarta">
          {title}
        </p>

        {/* Modal subtitle */}
        <p className="text-[16px] text-center leading-[26px] font-[500] mb-2 uxmm-text-color font-poppins">
          {subtitle}
        </p>

        {/* Modal buttons */}

        <div className="flex space-x-4 items-center justify-center mb-4">
          {link.linkedin && (
            <a
              href={link.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-customgray border-[1px] border-black px-3 py-1 rounded-lg font-poppins text-[16px] leading-[26px] font-[400]"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                style={{ color: "#095b9a", marginRight: "5px" }}
              />
              LinkedIn
            </a>
          )}
          {link.behance && (
            <a
              href={link.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="text-customgray border-[1px] border-black px-3 py-1 rounded-lg font-poppins text-[16px] leading-[26px] font-[400]"
            >
              <FontAwesomeIcon
                icon={faSquareBehance}
                size="lg"
                style={{ marginRight: "5px" }}
              />
              Behance
            </a>
          )}
        </div>

        {/* Modal scrollable content */}
        <div className="max-h-[200px] md:max-h-[250px] overflow-y-auto">
          <div className="text-gray-600 text-[14px] leading-[22px] font-[400]">
            <span dangerouslySetInnerHTML={{ __html: about }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
