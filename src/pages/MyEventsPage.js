import React from 'react';
import EventsPageHeader from '../components/myEventsPageComponents/EventsPageHeader'
import CalenderSection from '../components/myEventsPageComponents/calenderSection';
import UpcomingEvents from '../components/myEventsPageComponents/UpcomingEvents';

const sampleEvents = [
    {
        title: 'Design Review',
        owner: 'AliHosseini',
        date: 'May 06, 2024 08:00',
        type: 'Design',
        tags: ['ux', 'ui'],
        members: ['Mina123'],
    },
    {
        title: 'Team Standup',
        owner: 'AliHosseini',
        date: 'May 07, 2024 10:00',
        type: 'Development',
        tags: ['frontend'],
        members: ['Coder77'],
    },
    {
        title: 'Marketing Strategy',
        owner: 'Reza_dev',
        date: 'May 07, 2024 15:00',
        type: 'Marketing',
        tags: ['ads', 'sales'],
        members: ['Mina123'],
    },
    {
        title: 'Music Show',
        owner: 'AliHosseini',
        date: 'May 07, 2024 20:00',
        type: 'Music',
        tags: ['pop', 'concert'],
        members: ['Coder77'],
    },
    {
        title: 'Extra Event',
        owner: 'AliHosseini',
        date: 'May 08, 2024 17:00',
        type: 'Business',
        tags: ['teamwork'],
        members: ['AliHossein', 'Mina123'],
    },
];

const MyEventsPage = () => {
    return (
        <div className="min-h-screen max-h-screen h-screen overflow-hidden flex flex-col text-black">
            <EventsPageHeader />
            <div className='flex flex-row bg-[#060C16] h-full w-full px-2 text-white justify-around items-center'>
                <CalenderSection />
                <UpcomingEvents events={sampleEvents} />
            </div>
        </div>
    );
};

export default MyEventsPage;
