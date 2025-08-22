import React from 'react';
import { Users } from 'lucide-react';
import Card from './Card';

const Analytics = ({ employees }) => {
    const genderDistribution = employees.reduce((acc, e) => {
        acc[e.gender] = (acc[e.gender] || 0) + 1;
        return acc;
    }, {});
    const locationDistribution = employees.reduce((acc, e) => {
        acc[e.location] = (acc[e.location] || 0) + 1;
        return acc;
    }, {});
    const turnoverRate = ((employees.filter(e => ['Terminated', 'Resigned', 'Contract Closure', 'Pre-mature Contract Closure'].includes(e.status)).length / employees.length) * 100).toFixed(1);

    const Chart = ({ data, title, colorClass = 'bg-green-500' }) => (
        <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
            <div className="space-y-3">
                {Object.entries(data).map(([key, value]) => (
                    <div key={key}>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-600">{key}</span>
                            <span className="text-sm font-medium text-gray-600">{value}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className={`${colorClass} h-2.5 rounded-full`} style={{ width: `${(value / employees.length) * 100}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">HR Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <Card title="Turnover Rate" value={`${turnoverRate}%`} icon={<Users size={24} className="text-red-500" />} color="bg-red-100" />
                 <Card title="Avg. Employee Age" value={Math.round(employees.reduce((a,b) => a + b.age, 0) / employees.length)} icon={<Users size={24} className="text-purple-500" />} color="bg-purple-100" />
                 <Card title="Active Headcount" value={employees.filter(e => e.status === 'Active').length} icon={<Users size={24} className="text-green-500" />} color="bg-green-100" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Chart data={genderDistribution} title="Gender Distribution" colorClass="bg-blue-500" />
                <Chart data={locationDistribution} title="Location Distribution" colorClass="bg-indigo-500" />
            </div>
        </div>
    );
};

export default Analytics;
