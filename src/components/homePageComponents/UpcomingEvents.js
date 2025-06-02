import React from 'react';
import { Card } from 'primereact/card';
import BusinessImage from '../../assets/business.png';
const events = [
    {
        id: 1,
        date: '20 Jul 2024',
        time: '18:00–19:30',
        title: 'Business Meetup',
        image: "../assets/business.png", 
    },
    {
        id: 2,
        date: '20 Jul 2024',
        time: '18:00–19:30',
        title: 'Business Meetup',
        image: {BusinessImage}, 
    },
    {
        id: 3,
        date: '20 Jul 2024',
        time: '18:00–19:30',
        title: 'Business Meetup',
        image: {BusinessImage}, 
    },
    {
        id: 4,
        date: '20 Jul 2024',
        time: '18:00–19:30',
        title: 'Business Meetup',
        image: {BusinessImage}, 
    },
    {
        id: 5,
        date: '20 Jul 2024',
        time: '18:00–19:30',
        title: 'Business Meetup',
        image: {BusinessImage}, 
    },
        {
        id: 6,
        date: '20 Jul 2024',
        time: '18:00–19:30',
        title: 'Business Meetup',
        image: {BusinessImage}, 
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
            >
                <img
                src={BusinessImage}
                alt="event"
                className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="p-3">
                    <p className="text-sm text-gray-600 xl:text-sm lg:text-sm md:text-xs sm:text-xs">{event.date}</p>
                    <p className="text-sm text-gray-600 xl:text-sm lg:text-sm md:text-xs sm:text-xs">{event.time}</p>
                    <p className="text-md font-bold xl:text-md lg:text-md text-gray-900 mt-2 md:text-sm sm:text-xs">
                        {event.title}
                    </p>
                </div>
            </Card>
            ))}
        </div>
    </div>
);
}
