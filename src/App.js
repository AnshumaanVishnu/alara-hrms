import React, { useState } from 'react';
import { Users, LayoutDashboard, UserPlus, BarChart2, ShieldCheck, Calendar, Briefcase, Star, Settings, ChevronRight, X, Users2 } from 'lucide-react';

import {
    initialTeams,
    mockEmployeesData,
    mockOnboardingCandidatesData,
    mockLeaveRequestsData,
    mockAssetsData,
    mockPerformanceReviewsData,
    mockUserRoles,
} from './mockData';

import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import EmployeeFormModal from './components/EmployeeFormModal';
import TeamManagement from './components/TeamManagement';
import Onboarding from './components/Onboarding';
import Analytics from './components/Analytics';
import LeaveManagement from './components/LeaveManagement';
import AssetManagement from './components/AssetManagement';
import PerformanceAppraisal from './components/PerformanceAppraisal';
import UserRoles from './components/UserRoles';
import BackgroundCheck from './components/BackgroundCheck';

export default function App() {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    
    // State for our data
    const [employees, setEmployees] = useState(mockEmployeesData);
    const [onboardingCandidates, setOnboardingCandidates] = useState(mockOnboardingCandidatesData);
    const [leaveRequests, setLeaveRequests] = useState(mockLeaveRequestsData);
    const [assets, setAssets] = useState(mockAssetsData);
    const [performanceReviews, setPerformanceReviews] = useState(mockPerformanceReviewsData);
    const [teams, setTeams] = useState(initialTeams);

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEmployee, setEditingEmployee] = useState(null);

    const handleOpenModal = (employee = null) => {
        setEditingEmployee(employee);
        setIsModalOpen(true);
    };

    const handleSaveEmployee = (employeeData) => {
        if (employeeData && employeeData.id) {
            setEmployees(employees.map(e => e.id === employeeData.id ? employeeData : e));
        } else {
            const newEmployee = { ...employeeData, id: Date.now(), performance: 4.0, leaveBalance: 20 }; // simple ID generation with defaults
            setEmployees([...employees, newEmployee]);
        }
        setIsModalOpen(false);
        setEditingEmployee(null);
    };

    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard },
        { name: 'Employees', icon: Users },
        { name: 'Onboarding', icon: UserPlus },
        { name: 'Analytics', icon: BarChart2 },
        { name: 'Leave Management', icon: Calendar },
        { name: 'Asset Management', icon: Briefcase },
        { name: 'Performance', icon: Star },
        { name: 'Team Management', icon: Users2 },
        { name: 'User Roles', icon: Settings },
        { name: 'Background Checks', icon: ShieldCheck },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard': return <Dashboard employees={employees} leaveRequests={leaveRequests} onboardingCandidates={onboardingCandidates} onAddEmployeeClick={() => handleOpenModal()} />;
            case 'Employees': return <EmployeeList employees={employees} setEmployees={setEmployees} teams={teams} onAddEmployeeClick={handleOpenModal} />;
            case 'Onboarding': return <Onboarding candidates={onboardingCandidates} setCandidates={setOnboardingCandidates} />;
            case 'Analytics': return <Analytics employees={employees} />;
            case 'Leave Management': return <LeaveManagement leaveRequests={leaveRequests} setLeaveRequests={setLeaveRequests} />;
            case 'Asset Management': return <AssetManagement assets={assets} />;
            case 'Performance': return <PerformanceAppraisal reviews={performanceReviews} />;
            case 'Team Management': return <TeamManagement teams={teams} setTeams={setTeams} />;
            case 'User Roles': return <UserRoles roles={mockUserRoles} />;
            case 'Background Checks': return <BackgroundCheck />;
            default: return <Dashboard employees={employees} leaveRequests={leaveRequests} onboardingCandidates={onboardingCandidates} />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <nav className={`bg-white shadow-lg transition-all duration-300 flex flex-col ${isSidebarOpen ? 'w-72' : 'w-20'}`}>
                <div className="flex items-center justify-between h-20 px-6 border-b border-gray-200">
                     {isSidebarOpen && (
                        <div>
                            <h1 className="text-2xl font-bold text-blue-600">ALARA</h1>
                            <p className="text-xs text-gray-500 -mt-1">Assured Labour Accounting & Resource Automation</p>
                        </div>
                    )}
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-full hover:bg-gray-100">
                        {isSidebarOpen ? <X size={20} /> : <ChevronRight size={20} />}
                    </button>
                </div>
                <ul className="flex-1 flex flex-col p-4 space-y-2 overflow-y-auto">
                    {menuItems.map(item => (
                        <li key={item.name}>
                            <button
                                onClick={() => setActiveTab(item.name)}
                                className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                                    activeTab === item.name
                                        ? 'bg-blue-500 text-white shadow-md'
                                        : 'text-gray-600 hover:bg-gray-100'
                                } ${!isSidebarOpen && 'justify-center'}`}
                                title={item.name}
                            >
                                <item.icon size={20} />
                                {isSidebarOpen && <span className="ml-4 font-medium">{item.name}</span>}
                            </button>
                        </li>
                    ))}
                </ul>
                {isSidebarOpen && (
                    <div className="p-4 border-t border-gray-200">
                        <p className="text-xs text-center text-gray-500">
                            © 2025 <a href="https://www.linkedin.com/in/gargshrishti/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-blue-600">Shrishti Garg</a>
                        </p>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                {renderContent()}
            </main>
            
            {/* Global Modal */}
            <EmployeeFormModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                employee={editingEmployee} 
                onSave={handleSaveEmployee}
                teams={teams}
            />
        </div>
    );
}
