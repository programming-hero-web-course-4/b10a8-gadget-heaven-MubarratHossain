import React from 'react';
import { FaInfoCircle, FaTimes } from 'react-icons/fa'; 

const Modal = ({ isOpen, onClose, title, message }) => {
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">
                        <FaInfoCircle className="inline-block mr-2 text-[#9538E2]" /> 
                        {title}
                    </h2>
                    <button onClick={onClose} aria-label="Close Modal">
                        <FaTimes className="text-gray-600 hover:text-gray-800" /> 
                    </button>
                </div>
                <p className="mb-4">{message}</p>
                
            </div>
        </div>
    );
};

export default Modal;

