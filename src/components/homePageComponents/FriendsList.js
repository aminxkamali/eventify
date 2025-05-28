import React from 'react';
import { Card } from 'primereact/card';

// Sample static list of friends to display as cards
const FriendsListTest = [
    { id: 1, name: 'AliHosseini', color: '#1DABF0' },
    { id: 2, name: 'MinaAhmadi', color: '#FE816C' },
    { id: 3, name: 'Coder77', color: '#9A99FD' },
    { id: 4, name: 'RezaDev', color: '#A761EC' },
    { id: 5, name: 'SaraDesigner', color: '#9A99FD' },
    { id: 6, name: 'ElhamArt', color: '#9A99FD' },
    { id: 7, name: 'AliHosseini', color: '#1DABF0' },
    { id: 8, name: 'MinaAhmadi', color: '#FE816C' },
    { id: 9, name: 'Coder77', color: '#9A99FD' },
    { id: 10, name: 'RezaDev', color: '#A761EC' },
    { id: 11, name: 'SaraDesigner', color: '#9A99FD' },
    { id: 12, name: 'ElhamArt', color: '#9A99FD' },
    { id: 13, name: 'AliHosseini', color: '#1DABF0' },
    { id: 14, name: 'MinaAhmadi', color: '#FE816C' },
    { id: 15, name: 'Coder77', color: '#9A99FD' },

];

const FriendsList = () => {
    return (
        <div className="flex flex-col items-center w-full pb-6 pt-2">
            {/* Header section with title and "View all" link */}
            <div className="flex flex-row justify-between w-full p-8">
                <span className="text-4xl text-black font-bold font-inter text-gray xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
                    Browse by Friends list
                </span>
                <span className="text-base text-[#0F08F1] font-italic hover:cursor-pointer xl:text-base lg:text-sm md:text-xs sm:text-xxs">
                    <a href="/FriendsPage">View all</a>
                </span>
            </div>

            {/* Grid container for displaying friend cards */}
            <div className="w-full flex flex-row justify-center flex-wrap gap-8 px-6 md:gap-4 md:px-4 sm:gap-2 sm:px-2">
                {FriendsListTest.map((friend) => (
                    <Card
                        key={friend.id} // Unique key for each friend card
                        className="w-[6%] h-[6%] rounded-full  overflow-hidden shadow-sm hover:bg-gray-300 hover:cursor-pointer xl:w-[5%] lg:w-[4%] md:w-[3%] sm:w-[2%]"
                        style={{ backgroundColor: friend.color }} // Custom background color per friend
                    >
                        <div className='flex flex-row justify-center'>
                            <span className='text-md font-bold font-inter text-white xl:text-md lg:text-md md:text-md sm:text-sm'>
                                {friend.name} {/* Friend's name displayed inside the card */}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default FriendsList;
