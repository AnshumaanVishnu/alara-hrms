import React from 'react';

const StatusBadge = ({ status }) => {
    const statusClasses = {
        'Active': 'bg-green-100 text-green-800',
        'On Leave': 'bg-yellow-100 text-yellow-800',
        'Terminated': 'bg-red-100 text-red-800',
        'Resigned': 'bg-orange-100 text-orange-800',
        'Contract Closure': 'bg-gray-100 text-gray-800',
        'Pre-mature Contract Closure': 'bg-pink-100 text-pink-800',
        'Pending': 'bg-blue-100 text-blue-800',
        'Approved': 'bg-green-100 text-green-800',
        'In Use': 'bg-indigo-100 text-indigo-800',
        'Returned': 'bg-gray-100 text-gray-800',
        'Document Submission': 'bg-purple-100 text-purple-800',
        'Training Scheduled': 'bg-cyan-100 text-cyan-800',
        'Introductory Info': 'bg-teal-100 text-teal-800',
        'Background Check': 'bg-orange-100 text-orange-800',
    };
    return <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${statusClasses[status] || 'bg-gray-100 text-gray-800'}`}>{status}</span>;
};

export default StatusBadge;
