import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import Table from './Table';
import StatusBadge from './StatusBadge';

const LeaveManagement = ({ leaveRequests, setLeaveRequests }) => {
    const handleStatusChange = (id, status) => {
        setLeaveRequests(leaveRequests.map(req => req.id === id ? { ...req, status } : req));
    };

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Leave Management</h2>
            <Table headers={['Employee', 'Dates', 'Type', 'Status', 'Actions']}>
                {leaveRequests.map(req => (
                    <tr key={req.id} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">{req.employeeName}</td>
                        <td className="px-6 py-4">{req.startDate} to {req.endDate}</td>
                        <td className="px-6 py-4">{req.type}</td>
                        <td className="px-6 py-4"><StatusBadge status={req.status} /></td>
                        <td className="px-6 py-4">
                            {req.status === 'Pending' && (
                                <div className="flex gap-2">
                                    <button onClick={() => handleStatusChange(req.id, 'Approved')} className="p-2 text-green-600 hover:bg-green-100 rounded-full" title="Approve"><CheckCircle size={20} /></button>
                                    <button onClick={() => handleStatusChange(req.id, 'Denied')} className="p-2 text-red-600 hover:bg-red-100 rounded-full" title="Deny"><XCircle size={20} /></button>
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
            </Table>
        </div>
    );
};

export default LeaveManagement;
