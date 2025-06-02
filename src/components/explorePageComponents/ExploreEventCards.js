import React from 'react';

export default function ExploreEventCards() {
    const events = [1,2,3,4,5]; // نمونه داده بیشتر برای تست
    return (
        <div className="flex flex-wrap justify-center gap-6 px-8">
            {events.map((id, idx) => (
                <div
                    key={id}
                    className="bg-white rounded-xl shadow-md w-72 p-4 flex flex-col items-start hover:shadow-lg transition-shadow duration-200"
                    style={{ flexBasis: 'calc(20% - 1.5rem)', maxWidth: 'calc(20% - 1.5rem)' }}
                >
                    <div className="w-full h-40 bg-gray-200 rounded-lg mb-3"></div>
                    <h3 className="text-lg font-bold mb-1">Event Title {id}</h3>
                    <p className="text-gray-500 text-sm mb-2">Short description about the event</p>
                    <span className="text-xs text-blue-600 font-semibold mb-2">Category</span>
                    <button className="mt-auto bg-[#3E32E6] hover:bg-[#1d92E2] text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">View Details</button>
                </div>
            ))}
        </div>
    );
}
