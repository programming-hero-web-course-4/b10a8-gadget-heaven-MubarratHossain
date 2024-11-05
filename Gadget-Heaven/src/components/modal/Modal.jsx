import React from 'react';



const Modal = ({ isOpen, onClose, title, message }) => {
   

    // If the modal is not open, return null
    if (!isOpen) return null;

    // Function to handle the Close button
   

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className="mb-4">{message}</p>
                <div className="flex justify-between">
                    <button onClick={onClose} className="bg-gray-300 text-black py-2 px-4 rounded-md">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
