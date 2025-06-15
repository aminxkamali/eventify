import React from 'react';
import eventifyLogo from '../icons/eventifyLogo.png';

export default function AboutUsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0E141E] to-[#1A2233] text-white px-4 py-12">
            <img src={eventifyLogo} alt="Eventify Logo" className="w-24 h-24 mb-6" />
            <h1 className="text-4xl font-bold mb-4 text-orange-500">About Eventify</h1>
            <p className="max-w-2xl text-lg text-gray-300 text-center mb-8">
                Eventify is your all-in-one platform for discovering, creating, and managing events with your friends and teams. Our mission is to make event planning and participation easy, fun, and accessible for everyone. Whether you're organizing a small gathering or a large conference, Eventify provides the tools you need to connect, collaborate, and celebrate together.
            </p>
            <div className="bg-[#151922] rounded-xl shadow-lg p-8 w-full max-w-2xl flex flex-col gap-5 mb-8">
                <h2 className="text-2xl font-semibold text-orange-400 mb-2">Our Vision</h2>
                <p className="text-gray-300">To empower communities and individuals to create memorable experiences and foster meaningful connections through seamless event management.</p>
                <h2 className="text-2xl font-semibold text-orange-400 mt-6 mb-2">Meet the Team</h2>
                <ul className="list-disc list-inside text-gray-300">
                    <li>Passionate developers, designers, and event enthusiasts</li>
                    <li>Committed to innovation, user experience, and community building</li>
                    <li>Always listening to your feedback to improve Eventify</li>
                </ul>
            </div>
            <p className="text-gray-400 text-center max-w-xl">Thank you for being part of the Eventify community. Let's make every event unforgettable!</p>
            <a href="/HomePage">
                <button className="mt-8 hover:text-orange-600 text-white font-bold  shadow-lg transition-all duration-200">
                    Back to Home Page
                </button>
            </a>
        </div>
    );
}
