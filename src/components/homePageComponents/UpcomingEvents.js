import React from 'react';
import { Card } from 'primereact/card';
import BusinessImage from '../../assets/business.png';
const events = [
    {
        id: 1,
        Title: 'Business Meetup',
        Description: 'A networking event for business professionals.',
        Owner: 'John Doe',
        Type: 'Networking',
        StartTime: '2024-07-20 - 18:00',
        EndTime: '2024-07-20 - 19:30',
        IsDone: false,
        Tags: ['Business', 'Networking'],
        members: ['John Doe', 'Jane Smith'],
        Teams: ['Team Alpha'],
        date: '20 Jul 2024',
        time: '18:00–19:30',
        image: BusinessImage,
    },
    {
        id: 2,
        Title: 'Business Meetup',
        Description: 'A networking event for business professionals.',
        Owner: 'John Doe',
        Type: 'Networking',
        StartTime: '2024-07-20 - 18:00',
        EndTime: '2024-07-20 - 19:30',
        IsDone: false,
        Tags: ['Business', 'Networking'],
        members: ['John Doe', 'Jane Smith'],
        Teams: ['Team Alpha'],
        date: '20 Jul 2024',
        time: '18:00–19:30',
        image: BusinessImage,
    },
    {
        id: 3,
        Title: 'Business Meetup',
        Description: 'A networking event for business professionals.',
        Owner: 'John Doe',
        Type: 'Networking',
        StartTime: '2024-07-20 - 18:00',
        EndTime: '2024-07-20 - 19:30',
        IsDone: false,
        Tags: ['Business', 'Networking'],
        members: ['John Doe', 'Jane Smith'],
        Teams: ['Team Alpha'],
        date: '20 Jul 2024',
        time: '18:00–19:30',
        image: BusinessImage,
    },
    {
        id: 4,
        Title: 'Business Meetup',
        Description: 'A networking event for business professionals.',
        Owner: 'John Doe',
        Type: 'Networking',
        StartTime: '2024-07-20 - 18:00',
        EndTime: '2024-07-20 - 19:30',
        IsDone: false,
        Tags: ['Business', 'Networking'],
        members: ['John Doe', 'Jane Smith'],
        Teams: ['Team Alpha'],
        date: '20 Jul 2024',
        time: '18:00–19:30',
        image: BusinessImage,
    },
    {
        id: 5,
        Title: 'Business Meetup',
        Description: 'A networking event for business professionals.',
        Owner: 'John Doe',
        Type: 'Networking',
        StartTime: '2024-07-20 - 18:00',
        EndTime: '2024-07-20 - 19:30',
        IsDone: false,
        Tags: ['Business', 'Networking'],
        members: ['John Doe', 'Jane Smith'],
        Teams: ['Team Alpha'],
        date: '20 Jul 2024',
        time: '18:00–19:30',
        image: BusinessImage,
    },
        {
        id: 6,
        Title: 'Business Meetup',
        Description: 'A networking event for business professionals.',
        Owner: 'John Doe',
        Type: 'Networking',
        StartTime: '2024-07-20 - 18:00',
        EndTime: '2024-07-20 - 19:30',
        IsDone: false,
        Tags: ['Business', 'Networking'],
        members: ['John Doe', 'Jane Smith'],
        Teams: ['Team Alpha'],
        date: '20 Jul 2024',
        time: '18:00–19:30',
        image: BusinessImage,
    },

];

export default function UpcomingEvents() {
return (
    <div className="flex flex-col items-center w-full pb-6 pt-2">
        <div className="flex flex-row justify-between w-full p-8">
            <span className="text-4xl font-bold font-inter text-color-black xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
                Upcoming Events
            </span>
            <span className="text-base text-[#0F08F1] font-italic hover:cursor-pointer xl:text-base lg:text-sm md:text-xs sm:text-xxs">
                <a href="/MyEventsPage">View all</a>
            </span>
        </div>

        <div className="w-full flex flex-row justify-center flex-wrap gap-8 px-6 md:gap-4 md:px-4 sm:gap-2 sm:px-2 ">
            {events.map((event) => (
            <Card
                key={event.id}
                className="w-[15%] rounded-lg overflow-hidden shadow-sm bg-gray-200 hover:bg-gray-300 hover:cursor-pointer xl:w-[15%] lg:w-[13.5%] md:w-[12%] sm:w-[10%]"
                onClick={() => {
                    window.location.href = `/MyEventsPage?eventId=${event.id}`;
                }}
            >
                <img
                    src={event.image}
                    alt="event"
                    className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="p-3">
                    <p className="text-md font-bold text-gray-900 mt-2">{event.Title}</p>
                    <p className="text-xs text-gray-600 mb-1">{event.Description}</p>
                    <p className="text-xs text-gray-500 mb-1">Owner: {event.Owner}</p>
                    <p className="text-xs text-gray-500 mb-1">Type: {event.Type}</p>
                    <p className="text-xs text-gray-500 mb-1">Start: {event.StartTime}</p>
                    <p className="text-xs text-gray-500 mb-1">End: {event.EndTime}</p>
                    <p className="text-xs text-gray-500 mb-1">Status: {event.IsDone ? 'Done' : 'Upcoming'}</p>
                    <p className="text-xs text-gray-500 mb-1">Tags: {event.Tags.join(', ')}</p>
                    <p className="text-xs text-gray-500 mb-1">Members: {event.members.join(', ')}</p>
                    <p className="text-xs text-gray-500 mb-1">Teams: {event.Teams.join(', ')}</p>
                </div>
            </Card>
            ))}
        </div>
    </div>
);
}
