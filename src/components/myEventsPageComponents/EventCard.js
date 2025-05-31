import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="bg-zinc-800 p-2 rounded-lg mb-2 shadow-md">
            <h3 className="text-lg font-semibold text-white">{event.title}</h3>
            <p className="text-sm text-gray-300">Owner: {event.owner}</p>
            <p className="text-sm text-gray-300">Date: {event.date}</p>
            <p className="text-sm text-gray-300">Type: {event.type}</p>
            <div className="flex flex-wrap gap-1 mt-1">
                {event.tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded"
                    >
                    {tag}
                    </span>
                ))}
            </div>
            <p className="text-sm text-gray-400 mt-1">Members: {event.members.join(', ')}</p>
        </div>
    );
};

export default EventCard;
