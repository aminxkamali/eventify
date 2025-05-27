import react from 'react';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
export default function DiscoverEventsHeader() {
    return (
        <div className="w-full bg-[#0E141E] flex flex-col items-center pt-4 pb-6">
            <span className="text-5xl font-inter font-bold text-white self-center pb-6 pt-6">
                Discover Exicting Events
            </span>
            <span className="text-xl font-inter  text-white self-center pb-6 pt-6">
                Explore a wide range of events and find what interests you
            </span>
            <div className="w-[27%] pt-6 pb-6">
                <div className="flex items-center bg-[rgba(254,255,255,1)] rounded-full px-4 py-2">
                        <i className="pi pi-search text-[rgba(58,61,68,1)] mr-2" />
                    <InputText
                        placeholder="Search events"
                        className="flex-1 border-none outline-none bg-transparent text-[rgba(58,61,68,1)]"
                    />
                </div>
            </div>
        </div>
    );
}