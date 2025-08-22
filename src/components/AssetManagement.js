import React from 'react';
import Table from './Table';
import StatusBadge from './StatusBadge';

const AssetManagement = ({ assets }) => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Asset Management</h2>
        <Table headers={['Asset', 'Assigned To', 'Assigned Date', 'Status', 'Return Condition']}>
            {assets.map(asset => (
                <tr key={asset.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{asset.asset}</td>
                    <td className="px-6 py-4">{asset.employeeName}</td>
                    <td className="px-6 py-4">{asset.assignedDate}</td>
                    <td className="px-6 py-4"><StatusBadge status={asset.status} /></td>
                    <td className="px-6 py-4">{asset.returnCondition}</td>
                </tr>
            ))}
        </Table>
    </div>
);

export default AssetManagement;
