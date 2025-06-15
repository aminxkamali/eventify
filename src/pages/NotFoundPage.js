import React from 'react';
import { Link } from 'react-router-dom';
import eventifyLogo from '../icons/eventifyLogo.png';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0E141E] to-[#1A2233] text-white">
            <img src={eventifyLogo} alt="Eventify Logo" className="w-24 h-24 mb-6 animate-bounce" />
            <h1 className="text-7xl font-extrabold mb-4 text-orange-500 drop-shadow-lg">404</h1>
            <h2 className="text-2xl font-bold mb-2">Page Not Found!</h2>
            <p className="mb-8 text-lg text-gray-300">Sorry, the page you are looking for does not exist or has been removed.</p>
            <Link to="/HomePage">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200">
                    Back to Home
                </button>
            </Link>
        </div>
    );
}
