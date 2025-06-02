import React from 'react';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';

// Sample static list of friends with profile placeholder
const FriendsListTest = [
    { id: 1, name: 'Ali Hosseini', color: '#1DABF0' },
    { id: 2, name: 'Mina Ahmadi', color: '#FE816C' },
    { id: 3, name: 'Coder77', color: '#9A99FD' },
    { id: 4, name: 'Reza Dev', color: '#A761EC' },
    { id: 5, name: 'Sara Designer', color: '#9A99FD' },
    { id: 6, name: 'Elham Art', color: '#9A99FD' },
];

const FriendsList = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    return (
        <div className="flex flex-col items-center w-full pb-6 pt-2">
            {/* Header section with title and "View all" link */}
            <div className="flex flex-row justify-between w-full p-8">
                <span className="text-4xl font-bold font-inter text-gray xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
                    Browse by Friends list
                </span>
                <span
                    onClick={() => navigate('/CommunityPage')}
                    className="text-base text-[#0F08F1] font-italic hover:cursor-pointer xl:text-base lg:text-sm md:text-xs sm:text-xxs"
                >
                    View all
                </span>
            </div>

            {/* Grid container for displaying friend profile circles */}
            <div className="w-full flex flex-row justify-center flex-wrap gap-8 px-6 md:gap-4 md:px-4 sm:gap-2 sm:px-2">
                {FriendsListTest.map((friend) => (
                    <Card
                        key={friend.id} // Unique key for each friend card
                        className="w-[10%] rounded-xl overflow-hidden shadow-sm bg-white hover:bg-gray-300 hover:cursor-pointer flex flex-col justify-center items-center p-4"
                        onClick={() => navigate('/FriendsPage')}
                    >
                        {/* Circle profile placeholder */}
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
                            style={{ backgroundColor: friend.color }}
                        >
                            <span className="text-white text-xl font-bold justify-center">
                                {friend.name.charAt(0)} {/* First letter of name as placeholder avatar */}
                            </span>
                        </div>
                        {/* Friend name */}
                        <span className="text-sm text-black font-medium justify-center">
                            {friend.name}
                        </span>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default FriendsList;
