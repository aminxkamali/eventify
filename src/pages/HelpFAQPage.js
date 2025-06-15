import React from 'react';
import eventifyLogo from '../icons/eventifyLogo.png';

export default function HelpFAQPage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0E141E] to-[#1A2233] text-white px-4 py-12">
            <img src={eventifyLogo} alt="Eventify Logo" className="w-20 h-20 mb-6" /> 
            
            <h1 className="text-4xl font-bold mb-4 text-orange-500">Help & FAQ</h1>
            <p className="max-w-2xl text-lg text-gray-300 text-center mb-8">
                Find answers to common questions and learn how to get the most out of Eventify.
            </p>
            <div className="bg-[#151922] rounded-xl shadow-lg p-8 w-full max-w-2xl flex flex-col gap-6 mb-8">
                <div>
                    <h2 className="text-xl font-semibold text-orange-400 mb-2">How do I create an event?</h2>
                    <p className="text-gray-300">Go to the 'Create Event' page from the menu or footer, fill in the event details, and click 'Create'. Your event will be added to the platform and visible to your friends and teams.</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-orange-400 mb-2">How can I join an event?</h2>
                    <p className="text-gray-300">Browse events on the 'Explore' page or receive an invitation from friends. Click on the event and select 'Join' to participate.</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-orange-400 mb-2">How do I manage my profile?</h2>
                    <p className="text-gray-300">Go to the 'Profile' page to update your information, change your password, or manage your account settings.</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-orange-400 mb-2">Who can see my events?</h2>
                    <p className="text-gray-300">You can set your event visibility to public, friends, or teams when creating or editing an event.</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-orange-400 mb-2">Need more help?</h2>
                    <p className="text-gray-300">Contact our support team via the 'Contact Us' page or email us at <a href="mailto:support@eventify.com" className="text-orange-400 underline">support@eventify.com</a>.</p>
                </div>
            </div>
            <div className="flex flex-row-reverse items-center gap-4">
                <a href="/HomePage">
                    <button className="hover:text-orange-400 text-white font-bold  shadow-lg transition-all duration-200">
                        Back to Home Page
                    </button>
                </a>
                <p className="text-gray-400 text-center max-w-xl">Didn't find your answer? We're here to help!</p>
            </div>
        </div>
    );
}
