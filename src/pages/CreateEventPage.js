import React from 'react';
import CreateEventHeader from '../components/createEventPageComponents/CreateEventHeader'; // مسیر رو درست کن بر اساس پروژه تو
import CreateEventForm from '../Forms/CreateEventForm'
const CreateEventPage = () => {
    return (
        <div className='h-screen flex flex-col'>
            <CreateEventHeader />
            <CreateEventForm />
        </div>
    );
};

export default CreateEventPage;
