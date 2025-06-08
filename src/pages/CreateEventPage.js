import React from 'react';
import CreateEventHeader from '../components/createEventPageComponents/CreateEventHeader'; // مسیر رو درست کن بر اساس پروژه تو
import CreateEventForm from '../Forms/CreateEventForm'
import SEO from '../components/SEO';

const CreateEventPage = () => {
    return (
        <>
            <SEO
                title="Eventify | Create a New Event"
                description="Easily create and organize your own events. Set details, invite friends and teams, and manage everything with Eventify."
                keywords="create event, organize, invite, Eventify, event management"
            />
            <div className='h-screen flex flex-col'>
                <CreateEventHeader />
                <CreateEventForm />
            </div>
        </>
    );
};

export default CreateEventPage;
