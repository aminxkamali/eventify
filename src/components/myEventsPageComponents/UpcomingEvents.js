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
        <div className="w-2/3 justify-center items-center">
            <div className="w-full text-white">
                <div className="w-full flex flex-row flex-wrap md:flex-nowrap justify-between pb-1 items-center gap-4">
                {/* Title */}
                    <h2 className='w-auto min-w-[120px] font-bold flex items-center py-5 text-white text-lg whitespace-nowrap'>My Events</h2>
                {/* Filters + Button */}
                    <div className='flex-1 flex flex-row flex-wrap gap-4 items-end justify-end min-w-0'>
                        {['team', 'friend', 'type', 'tag'].map((field) => (
                            <div key={field} className="flex flex-col min-w-[120px] justify-end">
                                <label htmlFor={field} className="block text-sm mb-2 text-white capitalize">{field}</label>
                                <Dropdown
                                    id={field}
                                    value={filters[field]}
                                    options={filterOptions[field].map(opt => ({ label: opt, value: opt }))}
                                    onChange={(e) => setFilters(prev => ({ ...prev, [field]: e.value }))}
                                    placeholder={`Select ${field}`}
                                    className="w-48 min-w-[100px]"
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
                        <div className="flex flex-col justify-end min-w-[120px]">
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
