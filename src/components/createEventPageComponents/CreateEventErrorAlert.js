import React from 'react';
import 'primeicons/primeicons.css';

const ErrorAlert = ({ message }) => {
    if (!message) return null;

    return (
        <div className="mx-auto mt-4 mb-2 w-1/2 px-4 py-3 rounded flex items-center gap-3 bg-red-600 text-white">
            <i className="pi pi-exclamation-triangle text-xl" />
            <span className="text-sm">{message}</span>
        </div>
    );
};

export default ErrorAlert;
