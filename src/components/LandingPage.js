import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaCalendarAlt, FaComments, FaCheckCircle } from 'react-icons/fa';
import EventifyLogo from '../icons/eventifyLogo.png';

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0E141E] to-[#232946] text-white px-4">
            <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
                <img src={EventifyLogo} alt="Eventify Logo" className="w-24 h-24 mb-2 drop-shadow-lg" />
                <h1 className="text-5xl font-extrabold mb-2 tracking-tight">Eventify</h1>
                <p className="text-gray-300 text-lg mb-2">
                    Eventify is your all-in-one platform for discovering, creating, and managing events with your friends and teams.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">
                    <div className="flex flex-col items-center bg-[#1a2233] rounded-xl p-5 shadow-lg">
                        <FaUsers className="text-3xl text-orange-400 mb-2" />
                        <h2 className="font-bold text-xl mb-1">Connect & Collaborate</h2>
                        <p className="text-gray-400 text-sm">Create private or public events, invite friends, and build your own event communities. Work together, share ideas, and never miss a moment!</p>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a2233] rounded-xl p-5 shadow-lg">
                        <FaCalendarAlt className="text-3xl text-orange-400 mb-2" />
                        <h2 className="font-bold text-xl mb-1">Smart Event Management</h2>
                        <p className="text-gray-400 text-sm">Plan, join, and organize events with a modern and intuitive interface. Track your schedule, get reminders, and manage everything in one place.</p>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a2233] rounded-xl p-5 shadow-lg">
                        <FaComments className="text-3xl text-orange-400 mb-2" />
                        <h2 className="font-bold text-xl mb-1">Community & Chat</h2>
                        <p className="text-gray-400 text-sm">Join event communities, chat with other participants, and stay updated with real-time notifications and group discussions.</p>
                    </div>
                    <div className="flex flex-col items-center bg-[#1a2233] rounded-xl p-5 shadow-lg">
                        <FaCheckCircle className="text-3xl text-orange-400 mb-2" />
                        <h2 className="font-bold text-xl mb-1">Easy & Secure</h2>
                        <p className="text-gray-400 text-sm">Sign up in seconds, enjoy a secure experience, and focus on what matters: your events and your people.</p>
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                    <Link to="/login">
                        <button className="bg-orange-500 hover:bg-orange-800 text-white font-semibold py-2 px-8 rounded shadow text-lg transition duration-500">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-8 rounded shadow text-lg border border-gray-600 transition duration-500">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
