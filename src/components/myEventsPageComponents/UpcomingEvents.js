// components/UpcomingEvents.jsx
import React, { useState } from 'react';
import EventCard from './EventCard';
import { Dropdown } from 'primereact/dropdown';
import { Paginator } from 'primereact/paginator';
const UpcomingEvents = ({ events }) => {
    const [first, setFirst] = useState(0); // new state to control pagination

    const itemsPerPage = 4;
    // Calculate current page based on first index
    const currentEvents = events.slice(first, first + itemsPerPage);
    const [filters, setFilters] = useState({
        team: null,
        friend: null,
        type: null,
        tag: null,
    });

    const filterOptions = {
        team: ['Tech', 'Marketing', 'Design', 'Business'],
        friend: ['Ali', 'Mina123', 'Coder77'],
        type: ['Todo', 'Event'],
        tag: ['ux', 'ads', 'frontend'],
    };
    const [page, setPage] = useState(1);

    return (
        <div className="w-2/3 h-screen justify-center overflow-y-auto">
            <div className="w-full text-white">
                <div className="w-full flex flex-row justify-between pb-1">
                {/* Title */}
                    <h2 className='w-1/4 font-bold flex items-center py-5 text-white text-lg'>My Events</h2>
                {/* Filters + Button */}
                    <div className='w-3/4 flex flex-row gap-4 items-end justify-end'>
                        {['team', 'friend', 'type', 'tag'].map((field) => (
                            <div key={field} className="flex flex-col">
                                <label htmlFor={field} className="block text-sm mb-2 text-white capitalize">{field}</label>
                                <Dropdown
                                    id={field}
                                    value={filters[field]}
                                    options={filterOptions[field].map(opt => ({ label: opt, value: opt }))}
                                    onChange={(e) => setFilters(prev => ({ ...prev, [field]: e.value }))}
                                    placeholder={`Select ${field}`}
                                    className="w-48"
                                    panelClassName="bg-[#0E141E] text-white"
                                    dropdownIcon="pi pi-chevron-down"
                                    style={{
                                        background: '#21333F',
                                        borderColor: '#21333F',
                                        color: 'white',
                                        height: '44px',
                                        borderRadius: '0.5rem',
                                    }}
                                />
                            </div>
                        ))}
                        {/* Reset Button */}
                        <div className="flex items-end h-full">
                            <button className='w-40 bg-[#21333F] text-white h-11 rounded-lg' 
                            onClick={(e)=>setFilters({        
                                team: null,
                                friend: null,
                                type: null,
                                tag: null,
                            })}>
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </div>

                {/* Event Cards */}
                <div className=" overflow-y-auto max-h-[20%]">
                    {currentEvents.map((event, idx) => (
                        <EventCard key={idx} event={event} />
                    ))}
                </div>

                {/* Pagination */}
                <Paginator
                    first={first}
                    rows={itemsPerPage}
                    totalRecords={events.length}
                    onPageChange={(e) => {
                        setFirst(e.first);
                        setPage(Math.floor(e.first / itemsPerPage) + 1);
                    }}
                    className="mt-4 bg-[#0E141E] text-white rounded-lg"
                    template="PrevPageLink PageLinks NextPageLink"
                />
            </div>
        </div>
    );
};

export default UpcomingEvents;
