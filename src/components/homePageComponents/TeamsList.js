import React from 'react';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';

// Sample static list of teams
const TeamsListTest = [
    { id: 1, name: 'Dev Team', color: '#1DABF0', owner: 'Ali Hosseini', role: 'Admin', lastUpdate: '2024-05-01' },
    { id: 2, name: 'Design Team', color: '#FE816C', owner: 'Mina Ahmadi', role: 'Editor', lastUpdate: '2024-05-10' },
    { id: 3, name: 'Marketing Team', color: '#9A99FD', owner: 'Reza Dev', role: 'Member', lastUpdate: '2024-05-07' },
];

const TeamsList = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center w-full pb-6 pt-2">
            {/* Header section */}
            <div className="flex flex-row justify-between w-full p-8">
                <span className="text-4xl font-bold font-inter text-gray xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
                    Browse by Teams list
                </span>
                <span
                    onClick={() => navigate('/TeamsPage')}
                    className="text-base text-[#0F08F1] font-italic hover:cursor-pointer xl:text-base lg:text-sm md:text-xs sm:text-xxs"
                >
                    View all
                </span>
            </div>

            {/* Grid container */}
            <div className="w-full flex flex-row justify-center flex-wrap gap-8 px-6 md:gap-4 md:px-4 sm:gap-2 sm:px-2">
                {TeamsListTest.map((team) => (
                    <Card
                        key={team.id}
                        className="w-[15%] rounded-xl overflow-hidden shadow-sm bg-white hover:bg-gray-300 hover:cursor-pointer flex flex-col justify-center items-center p-4"
                        onClick={() => navigate('/TeamsPage')}
                        bodyClassName="p-0"
                    >
                        {/* Team circle icon */}
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
                            style={{ backgroundColor: team.color }}
                        >
                            <span className="text-white text-xl font-bold justify-center">
                                {team.name.charAt(0)}
                            </span>
                        </div>

                        {/* Team name */}
                        <span className="text-sm text-black font-semibold mb-2">
                            {team.name}
                        </span>

                        {/* Extra info */}
                        <div className="text-xs text-gray-700 text-left w-full">
                            <p><strong>Owner:</strong> {team.owner}</p>
                            <p><strong>Role:</strong> {team.role}</p>
                            <p><strong>Last Update:</strong> {team.lastUpdate}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TeamsList;
