import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ExploreSearch() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const initialSearch = params.get('search') || '';
    const [searchValue, setSearchValue] = useState(initialSearch);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
        // Optionally, update the URL as user types:
        // navigate(`/ExplorePage?search=${encodeURIComponent(e.target.value)}`);
    };

    const handleSearch = () => {
        navigate(`/ExplorePage?search=${encodeURIComponent(searchValue)}`);
    };

    return (
        <div className="w-full bg-[#0E141E] flex justify-center mt-2 mb-4">
            <div className="relative w-1/2 flex items-center">
                <span className="absolute left-3 flex items-center h-full cursor-pointer" onClick={handleSearch}>
                    {/* SVG magnifier icon */}
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </span>
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyDown={e => e.key === 'Enter' && handleSearch()}
                    className="w-full pl-10 px-4 py-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
        </div>
    );
}
