import React, { useState } from 'react';

const TeamManagement = ({ teams, setTeams }) => {
    const [newTeam, setNewTeam] = useState('');

    const handleAddTeam = () => {
        if (newTeam && !teams.includes(newTeam)) {
            setTeams([...teams, newTeam]);
            setNewTeam('');
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Team Management</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Add New Team</h3>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newTeam}
                            onChange={(e) => setNewTeam(e.target.value)}
                            placeholder="Enter new team name"
                            className="flex-grow p-2 border rounded-lg"
                        />
                        <button onClick={handleAddTeam} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add</button>
                    </div>
                </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Existing Teams</h3>
                    <div className="flex flex-wrap gap-2">
                        {teams.map(team => (
                            <span key={team} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{team}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamManagement;
