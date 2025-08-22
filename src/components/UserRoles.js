import React from 'react';
import { Edit } from 'lucide-react';
import Table from './Table';

const UserRoles = ({ roles }) => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">User Role Management</h2>
        <Table headers={['Role', 'Permissions', 'Actions']}>
            {roles.map(role => (
                <tr key={role.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{role.role}</td>
                    <td className="px-6 py-4">{role.permissions.join(', ')}</td>
                    <td className="px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-800"><Edit size={18} /></button>
                    </td>
                </tr>
            ))}
        </Table>
    </div>
);

export default UserRoles;
