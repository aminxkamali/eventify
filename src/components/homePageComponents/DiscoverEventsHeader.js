import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function DiscoverEventsHeader() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const handleSearch = () => {
        navigate(`/ExplorePage?search=${encodeURIComponent(search)}`);
    };
    return (
        <div className="w-full bg-[#0E141E] flex flex-col items-center pt-4 pb-6">
            <span className="text-5xl font-inter font-bold text-white self-center pb-6 pt-6">
                Discover Exicting Events
            </span>
            <span className="text-xl font-inter  text-white self-center pb-6 pt-6">
                Explore a wide range of events and find what interests you
            </span>
            <div className="w-[27%] pt-6 pb-6">
                <div className="flex items-center bg-[rgba(254,255,255,1)] rounded-full px-4 py-2 shadow-md h-11">
                    <span className="relative flex items-center h-full cursor-pointer mr-2" style={{alignSelf: 'left'}} onClick={handleSearch}>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>
                        <input
                            type="text"
                            placeholder='Search events'
                            autoComplete="off"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSearch()}
                            className="flex-1 outline-none bg-transparent border-0 rounded-none focus:border-0 focus:border-current text-[rgba(58,61,68,1)]"
                        />
                </div>
            </div>
        </div>
    );
}