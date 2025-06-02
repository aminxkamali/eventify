import React from 'react';

export default function ExploreSearch() {
    return (
        <div className="w-full bg-[#0E141E] flex justify-center mt-2 mb-4">
            <div className="relative w-1/2 flex items-center">
                <span className="absolute left-3 flex items-center h-full">
                    {/* SVG magnifier icon */}
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </span>
                <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full pl-10 px-4 py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
        </div>
    );
}
