import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';

const TeamsPage = () => {
    const [teams, setTeams] = useState([
        { name: 'Dev Team', role: 'Admin' },
        { name: 'Design Team', role: 'Member' },
        { name: 'Marketing Team', role: 'Editor' },
                { name: 'Dev Team', role: 'Admin' },
        { name: 'Design Team', role: 'Member' },
        { name: 'Marketing Team', role: 'Editor' },
                { name: 'Dev Team', role: 'Admin' },
        { name: 'Design Team', role: 'Member' },
        { name: 'Marketing Team', role: 'Editor' }
    ]);
    const [memberUsernames, setMemberUsernames] = useState([]);
    const [memberRoles, setMemberRoles] = useState([]);
    const roleOptions = [
        { label: 'Admin', value: 'Admin' },
        { label: 'Editor', value: 'Editor' },
        { label: 'Member', value: 'Member' }
    ];
const handleCreateTeam = () => {
    if (teamName.trim() && memberUsernames.length > 0) {
        const newMembers = memberUsernames.map((username, idx) => ({
            username,
            role: idx === 0 ? 'Admin' : (memberRoles[idx] || 'Member')
        }));
        setTeams([...teams, { name: teamName.trim(), members: newMembers }]);
        setTeamName('');
        setMemberUsernames([]);
        setMemberRoles([]);
    }
};

    const [teamName, setTeamName] = useState('');
    const [memberUsername, setMemberUsername] = useState('');
    const [searchQuery, setSearchQuery] = useState('');



    const filteredTeams = teams.filter(team =>
        team.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full h-screen px-12 py-6 text-white bg-[#060C16]">
            <h1 className="text-3xl font-bold text-center mb-6">Teams</h1>
            <div className='border border-[#21333F] pb-1 mb-8'>
                {/* Search Section */}
                <div className="flex justify-center mb-4">
                    <InputText
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search teams..."
                        className="w-full  h-10 m-4 p-2 rounded-lg bg-[#060C16] text-white border border-[#21333F]  outline-none"
                    />
                </div>

                {/* Team List */}
                <ScrollPanel style={{ width: '100%', height: '300px' }} className="bg-[#060C16]">
                    <ul className="p-4 space-y-2">
                        {filteredTeams.length > 0 ? (
                            filteredTeams.map((team, idx) => (
                                <li key={idx} className="bg-[#151922] px-4 py-2 rounded text-sm flex justify-between items-center">
                                    <span>{team.name}</span>
                                    <span className="text-orange-400 text-xs font-semibold">{team.role}</span>
                                </li>
                            ))
                        ) : (
                            <li className="text-gray-400 text-center">No teams found</li>
                        )}
                    </ul>
                </ScrollPanel>
            </div>
            {/* Create Team Section */}
            <div className="flex flex-col gap-4 mb-8 items-center border border-[#21333F]">
                <div className='w-full flex flex-row gap-2 p-2 '>
                    <InputText
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        placeholder="Enter team name"
                        className="w-1/2 h-11 p-2 rounded-lg bg-[#060C16] text-white border border-[#21333F]  outline-none"
                    />
                    <Chips
                        value={memberUsernames}
                        onChange={(e) => {
                            const newUsernames = Array.isArray(e.value) ? e.value : [];
                            const newRoles = [];

                            newUsernames.forEach((username, idx) => {
                                const existingIdx = memberUsernames.indexOf(username);
                                newRoles[idx] = existingIdx !== -1 ? memberRoles[existingIdx] : 'Member';
                            });

                            setMemberUsernames(newUsernames);
                            setMemberRoles(newRoles);
                        }}
                        placeholder="Enter member usernames (press Enter)"
                        className="w-1/2"
                        inputClassName="w-1/2 h-11 p-2 rounded-lg bg-[#060C16] text-white border border-[#21333F] outline-none"
                    />
                </div>

                {/* Role dropdowns per user */}
                {memberUsernames.map((user, idx) => (
                    <div key={idx} className="flex flex-row gap-2 items-center w-full sm:w-1/3">
                        <span className="text-sm text-white w-1/2">{user}</span>
                            <Dropdown
                                value={memberRoles[idx] || 'Member'}
                                options={roleOptions}
                                onChange={(e) => {
                                    const newRoles = [...memberRoles];
                                    newRoles[idx] = e.value;
                                    setMemberRoles(newRoles);
                                }}
                                className="w-1/2"
                                placeholder="Select role"
                            />
                    </div>
                ))}

                <Button
                    label="Create Team"
                    onClick={handleCreateTeam}
                    className="h-11 px-5 bg-orange-600 border-none text-white font-semibold rounded-lg hover:bg-orange-700"
                />
            </div>
        </div>
    );
};

export default TeamsPage;
