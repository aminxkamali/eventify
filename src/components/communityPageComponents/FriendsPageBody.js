import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ScrollPanel } from 'primereact/scrollpanel';

const FriendsPageBody = () => {
    const [friends, setFriends] = useState([
        'AliHosseini', 'Mina123', 'Coder77', 'Reza_dev' ,'AliHosseini', 'Mina123', 'Coder77', 'Reza_dev'
    ]);
    const [username, setUsername] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleAddFriend = () => {
        if (username.trim() && !friends.includes(username.trim())) {
            setFriends(prev => [...prev, username.trim()]);
            setUsername('');
        }
    };

    const filteredFriends = friends.filter(friend =>
        friend.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-[#060C16] w-full h-screen px-12 py-6 text-white">
            {/* Header */}

            <div className='border border-[#21333F] pb-1 mb-8'>
                <h1 className="text-3xl font-bold text-center mb-6 mt-4">Friends List</h1>
                {/* Search */}
                <div className="p-4 flex justify-center mb-4 relative">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>
                    <InputText
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search friends..."
                        className="w-full h-10 p-2 pl-10 rounded-lg bg-[#060C16] text-white border border-[#21333F] outline-none"
                    />
                </div>
                {/* Friends List */}
                <ScrollPanel style={{ width: '100%', height: '300px' }} className=" bg-[#060C16]">
                    <ul className="p-4 space-y-2"> 
                        {filteredFriends.length > 0 ? (
                            filteredFriends.map((friend, idx) => (
                                <li key={idx} className="bg-[#151922] px-4 py-2 rounded text-sm">{friend}</li>
                            ))
                        ) : (
                            <li className="text-gray-400 text-center">No friends found</li>
                        )}
                    </ul>
                </ScrollPanel>
            </div>
            {/* Add Friend Section */}
            <div className="w-full flex flex-row  justify-center items-center gap-4 mb-10">
                <InputText
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username to add"
                    className="w-[85%] h-11 p-2 rounded-lg bg-[#060C16] text-white border border-[#21333F] outline-none"
                />
                <Button
                    label="Add Friend"
                    onClick={handleAddFriend}
                    className="w-[15%] h-11 px-5 bg-orange-600 border-none text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200"
                />
            </div>
        </div>
    );
};

export default FriendsPageBody;
