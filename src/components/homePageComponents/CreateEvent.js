import React from 'react'

export default function CreateEvent() {
    return (
        <div className='flex flex-col items-center w-full pb-6 pt-2'>
            <span className='text-3xl font-bold font-inter text-black p-4 xl:text-3xl lg:text-2xl md:text-xl sm:text-lg'>
                Ready to organize your next event?
            </span>
            <span className='text-2xl font-inter text-black p-4 xl:text-2xl lg:text-xl md:text-lg sm:text-md'>
                Create and manage your own events with ease
            </span>
            <span className='p-4'>
                <a href='/CreateEvent'>
                    <button className="bg-[#3E32E6] hover:bg-[#1d92E2] active:bg-[#3E32E6] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 justify-center ">
                        Create Event
                    </button>
                </a>
            </span>
        </div>
    )
}