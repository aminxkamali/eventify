import React from 'react';
import { Calendar } from 'primereact/calendar';

const CalendarSection = () => {
    return (
        <div className="w-1/3">
            <div className="border-none shadow-md p-4 text-white bg-[#060C16] ">
                <h2 className="text-xl font-bold mb-4">📆 Calender</h2>
                <Calendar inline showWeek />
            </div>
        </div>
    );
};

export default CalendarSection;
