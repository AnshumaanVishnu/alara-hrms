import React from 'react';
import { Users, Star, Calendar, UserPlus, PlusCircle, BarChart2 } from 'lucide-react';
import Card from './Card';

const Dashboard = ({ employees, leaveRequests, onboardingCandidates, onAddEmployeeClick }) => {
    const avgPerformance = (employees.reduce((acc, e) => acc + e.performance, 0) / employees.length).toFixed(1);
    const pendingLeaves = leaveRequests.filter(l => l.status === 'Pending').length;
    const pendingOnboarding = onboardingCandidates.length;

    const departmentDistribution = employees.reduce((acc, e) => {
        acc[e.department] = (acc[e.department] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">HR Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card title="Total Employees" value={employees.length} icon={<Users size={24} className="text-blue-500" />} color="bg-blue-100" />
                <Card title="Average Performance" value={avgPerformance} icon={<Star size={24} className="text-yellow-500" />} color="bg-yellow-100" />
                <Card title="Pending Leave Requests" value={pendingLeaves} icon={<Calendar size={24} className="text-red-500" />} color="bg-red-100" />
                <Card title="Onboarding Candidates" value={pendingOnboarding} icon={<UserPlus size={24} className="text-green-500" />} color="bg-green-100" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Department Distribution</h3>
                    <div className="space-y-3">
                        {Object.entries(departmentDistribution).map(([dept, count]) => (
                            <div key={dept}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-gray-600">{dept}</span>
                                    <span className="text-sm font-medium text-gray-600">{count}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${(count / employees.length) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h3>
                    <div className="space-y-4">
                        <button onClick={onAddEmployeeClick} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                            <PlusCircle size={20} /> Add New Employee
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                            <BarChart2 size={20} /> Generate Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
