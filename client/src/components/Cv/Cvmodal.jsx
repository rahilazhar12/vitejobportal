import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-10 inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-lg shadow-lg">
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div> 
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
