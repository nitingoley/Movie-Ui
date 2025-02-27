import React from 'react';

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background overlay */}
          <div className="fixed inset-0 bg-black opacity-50"></div>

          {/* Modal content */}
          <div className="absolute top-[40%] left-0 bg-white p-4 rounded-lg z-10 text-right">
            {/* Close button */}
            <button
              className="text-black font-semibold hover:text-gray-700 focus:outline-none mr-2"
              onClick={onClose}
            >
              X
            </button>
            {/* Children */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};
