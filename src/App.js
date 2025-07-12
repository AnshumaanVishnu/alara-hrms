import React, { useState, useMemo, useEffect } from 'react';
import { Users, LayoutDashboard, UserPlus, BarChart2, ShieldCheck, Calendar, Briefcase, Star, Settings, ChevronRight, Search, Filter, X, Edit, Trash2, PlusCircle, CheckCircle, XCircle, Upload, Users2 } from 'lucide-react';

// --- MOCK DATA (INDIAN CONTEXT & REFINED) ---
const initialTeams = ['Creative & Distribution', 'Analytics', 'Graphics', 'Technology', 'Human Resources', 'Product', 'Design'];

const mockEmployeesData = [
    { id: 1, name: 'Priya Sharma', email: 'priya.sharma@alara.com', title: 'Senior Software Engineer', department: 'Technology', team: 'Technology', status: 'Active', hireDate: '2022-01-15', location: 'Bengaluru', skills: ['React', 'Node.js', 'AWS'], age: 32, gender: 'Female', performance: 4.5, leaveBalance: 15 },
    { id: 2, name: 'Rohan Mehta', email: 'rohan.mehta@alara.com', title: 'HR Director', department: 'Human Resources', team: 'Human Resources', status: 'Active', hireDate: '2021-05-20', location: 'Mumbai', skills: ['Recruiting', 'Policy Making', 'Payroll'], age: 38, gender: 'Male', performance: 4.8, leaveBalance: 12 },
    { id: 3, name: 'Aarav Singh', email: 'aarav.singh@alara.com', title: 'Product Manager', department: 'Product', team: 'Product', status: 'On Leave', hireDate: '2023-02-10', location: 'Delhi', skills: ['Agile', 'JIRA', 'Roadmapping'], age: 30, gender: 'Male', performance: 4.2, leaveBalance: 5 },
    { id: 4, name: 'Ananya Gupta', email: 'ananya.gupta@alara.com', title: 'Lead UX Designer', department: 'Design', team: 'Graphics', status: 'Active', hireDate: '2022-09-01', location: 'Pune', skills: ['Figma', 'User Research', 'Prototyping'], age: 34, gender: 'Female', performance: 4.9, leaveBalance: 18 },
    { id: 5, name: 'Vikram Patel', email: 'vikram.patel@alara.com', title: 'DevOps Lead', department: 'Technology', team: 'Technology', status: 'Terminated', hireDate: '2021-11-11', location: 'Hyderabad', skills: ['Kubernetes', 'Docker', 'CI/CD'], age: 41, gender: 'Male', performance: 3.8, leaveBalance: 0 },
    { id: 6, name: 'Saanvi Reddy', email: 'saanvi.reddy@alara.com', title: 'Data Scientist', department: 'Analytics', team: 'Analytics', status: 'Active', hireDate: '2023-07-19', location: 'Bengaluru', skills: ['Python', 'TensorFlow', 'SQL'], age: 29, gender: 'Female', performance: 4.6, leaveBalance: 20 },
    { id: 7, name: 'Arjun Kumar', email: 'arjun.kumar@alara.com', title: 'Content Writer', department: 'Marketing', team: 'Creative & Distribution', status: 'Resigned', hireDate: '2022-03-12', location: 'Mumbai', skills: ['SEO', 'Content Strategy'], age: 28, gender: 'Male', performance: 4.1, leaveBalance: 0 },
    { id: 8, name: 'Diya Singh', email: 'diya.singh@alara.com', title: 'Graphic Designer', department: 'Design', team: 'Graphics', status: 'Contract Closure', hireDate: '2023-01-05', location: 'Pune', skills: ['Illustrator', 'Photoshop'], age: 26, gender: 'Female', performance: 4.3, leaveBalance: 0 },
];

// ... (other mock data remains the same)
const mockOnboardingCandidatesData = [
    { id: 101, name: 'Aditya Rao', position: 'Junior Developer', stage: 'Document Submission', city: 'Chennai', skills: ['JavaScript', 'HTML', 'CSS'], experience: 1, age: 24, gender: 'Male' },
    { id: 102, name: 'Isha Nair', position: 'Marketing Intern', stage: 'Training Scheduled', city: 'Mumbai', skills: ['Social Media', 'Content Writing'], experience: 0, age: 22, gender: 'Female' },
    { id: 103, name: 'Kabir Joshi', position: 'Senior Accountant', stage: 'Introductory Info', city: 'Delhi', skills: ['Tally', 'GST', 'Auditing'], experience: 5, age: 31, gender: 'Male' },
    { id: 104, name: 'Diya Verma', position: 'HR Executive', stage: 'Background Check', city: 'Pune', skills: ['Communication', 'MS Office'], experience: 2, age: 26, gender: 'Female' },
];

const mockLeaveRequestsData = [
    { id: 1, employeeName: 'Priya Sharma', startDate: '2025-08-01', endDate: '2025-08-05', type: 'Vacation', status: 'Approved' },
    { id: 2, employeeName: 'Ananya Gupta', startDate: '2025-07-25', endDate: '2025-07-25', type: 'Sick Leave', status: 'Pending' },
    { id: 3, employeeName: 'Aarav Singh', startDate: '2025-09-10', endDate: '2025-09-20', type: 'Personal Leave', status: 'Approved' },
    { id: 4, employeeName: 'Saanvi Reddy', startDate: '2025-08-12', endDate: '2025-08-13', type: 'Vacation', status: 'Pending' },
];

const mockAssetsData = [
    { id: 1, asset: 'MacBook Pro 16"', employeeName: 'Priya Sharma', assignedDate: '2022-01-20', status: 'In Use', returnCondition: 'N/A' },
    { id: 2, asset: 'Dell XPS 15', employeeName: 'Rohan Mehta', assignedDate: '2021-06-01', status: 'In Use', returnCondition: 'N/A' },
    { id: 3, asset: 'iPhone 15 Pro', employeeName: 'Aarav Singh', assignedDate: '2023-02-15', status: 'In Use', returnCondition: 'N/A' },
    { id: 4, asset: 'Logitech MX Master 3', employeeName: 'Ananya Gupta', assignedDate: '2022-09-01', status: 'Returned', returnCondition: 'Good' },
    { id: 5, asset: 'Samsung S23 Ultra', employeeName: 'Saanvi Reddy', assignedDate: '2023-07-20', status: 'In Use', returnCondition: 'N/A' },
];

const mockPerformanceReviewsData = [
    { id: 1, employeeName: 'Priya Sharma', reviewDate: '2025-06-30', rating: 4.5, summary: 'Exceeded expectations in Q2 projects, showing great technical leadership.', objectives: ['Launch payment gateway integration', 'Mentor two junior developers'] },
    { id: 2, employeeName: 'Rohan Mehta', reviewDate: '2025-06-15', rating: 4.8, summary: 'Excellent leadership and strategic initiatives in talent acquisition.', objectives: ['Reduce time-to-hire by 15%', 'Implement new employee wellness program'] },
    { id: 3, employeeName: 'Ananya Gupta', reviewDate: '2025-06-28', rating: 4.9, summary: 'Outstanding design work and user-centric approach have significantly improved product engagement.', objectives: ['Redesign the mobile app dashboard', 'Conduct 5 user testing sessions'] },
    { id: 4, employeeName: 'Saanvi Reddy', reviewDate: '2025-12-20', rating: 4.6, summary: 'Developed predictive models that increased sales forecast accuracy by 20%.', objectives: ['Improve model accuracy further', 'Publish a research paper'] },
];


const mockUserRoles = [
    { id: 1, role: 'HR Admin', permissions: ['Full Access to all modules'] },
    { id: 2, role: 'HR Manager', permissions: ['View team data', 'Approve leaves', 'Conduct performance reviews for team'] },
    { id: 3, role: 'HR Assistant', permissions: ['View own profile', 'Request leave', 'View assigned assets'] },
    { id: 4, role: 'Finance Executive', permissions: ['Access payroll related data', 'View employee compensation details'] },
];

// --- Reusable Components ---
const Card = ({ title, value, icon, color, children }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-800">{value}</p>
            </div>
            <div className={`p-3 rounded-full ${color}`}>
                {icon}
            </div>
        </div>
        {children && <div className="mt-4">{children}</div>}
    </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl m-4">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6 max-h-[70vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

const Table = ({ headers, children }) => (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm">
        <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    {headers.map(header => <th key={header} scope="col" className="px-6 py-4 whitespace-nowrap">{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    </div>
);

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

// --- Main Feature Components ---

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

const EmployeeList = ({ employees, setEmployees, teams, onAddEmployeeClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ location: '', department: '', status: '', team: '' });
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    
    const filteredEmployees = useMemo(() => {
        return employees.filter(emp =>
            emp.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filters.location ? emp.location === filters.location : true) &&
            (filters.department ? emp.department === filters.department : true) &&
            (filters.status ? emp.status === filters.status : true) &&
            (filters.team ? emp.team === filters.team : true)
        );
    }, [employees, searchTerm, filters]);

    const locations = [...new Set(employees.map(e => e.location))];
    const departments = [...new Set(employees.map(e => e.department))];
    const statuses = ['Active', 'On Leave', 'Terminated', 'Resigned', 'Contract Closure', 'Pre-mature Contract Closure'];

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this employee? This action cannot be undone.')) {
            setEmployees(employees.filter(e => e.id !== id));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="text-3xl font-bold text-gray-800">Employee Information</h2>
                 <button onClick={onAddEmployeeClick} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <PlusCircle size={20} /> Add Employee
                </button>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                        <Filter size={20} /> Filters {isFilterOpen ? <ChevronRight className="h-4 w-4 rotate-90" /> : <ChevronRight className="h-4 w-4" />}
                    </button>
                </div>
                {isFilterOpen && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border-t border-gray-100">
                        <select value={filters.location} onChange={e => setFilters({...filters, location: e.target.value})} className="w-full p-2 border border-gray-200 rounded-lg">
                            <option value="">All Locations</option>
                            {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                        </select>
                        <select value={filters.department} onChange={e => setFilters({...filters, department: e.target.value})} className="w-full p-2 border border-gray-200 rounded-lg">
                             <option value="">All Departments</option>
                            {departments.map(dep => <option key={dep} value={dep}>{dep}</option>)}
                        </select>
                        <select value={filters.team} onChange={e => setFilters({...filters, team: e.target.value})} className="w-full p-2 border border-gray-200 rounded-lg">
                             <option value="">All Teams</option>
                            {teams.map(team => <option key={team} value={team}>{team}</option>)}
                        </select>
                        <select value={filters.status} onChange={e => setFilters({...filters, status: e.target.value})} className="w-full p-2 border border-gray-200 rounded-lg">
                            <option value="">All Statuses</option>
                            {statuses.map(status => <option key={status} value={status}>{status}</option>)}
                        </select>
                    </div>
                )}
            </div>
            <Table headers={['Employee', 'Title', 'Team', 'Status', 'Contact', 'Actions']}>
                {filteredEmployees.map(emp => (
                    <tr key={emp.id} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                            <img className="w-10 h-10 rounded-full object-cover" src={`https://i.pravatar.cc/150?u=${emp.email}`} alt={emp.name} />
                            {emp.name}
                        </td>
                        <td className="px-6 py-4">{emp.title}</td>
                        <td className="px-6 py-4">{emp.team}</td>
                        <td className="px-6 py-4"><StatusBadge status={emp.status} /></td>
                        <td className="px-6 py-4">{emp.email}</td>
                        <td className="px-6 py-4 flex items-center gap-4">
                            <button onClick={() => onAddEmployeeClick(emp)} className="text-blue-600 hover:text-blue-800"><Edit size={18} /></button>
                            <button onClick={() => handleDelete(emp.id)} className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                        </td>
                    </tr>
                ))}
            </Table>
        </div>
    );
};

const EmployeeFormModal = ({ isOpen, onClose, employee, onSave, teams }) => {
    const [formData, setFormData] = useState({});
    const [resumeFileName, setResumeFileName] = useState('');

    useEffect(() => {
        setFormData(employee || { name: '', email: '', title: '', department: '', team: '', location: '', status: 'Active' });
        setResumeFileName('');
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleResumeUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setResumeFileName(file.name);
            // --- SIMULATION of resume parsing ---
            // In a real app, you'd send the file to a backend to parse.
            // Here, we just pre-fill the form with mock data.
            alert("Resume parsing simulation: Data has been pre-filled. Please verify.");
            setFormData({
                name: 'Aditya Rao',
                email: 'aditya.rao.new@alara.com',
                title: 'Junior Developer',
                department: 'Technology',
                team: 'Technology',
                location: 'Chennai',
                status: 'Active',
                skills: ['JavaScript', 'HTML', 'CSS']
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    const statuses = ['Active', 'On Leave', 'Terminated', 'Resigned', 'Contract Closure', 'Pre-mature Contract Closure'];

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={employee && employee.id ? 'Edit Employee' : 'Add New Employee'}>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                    <input type="file" id="resume-upload" className="hidden" onChange={handleResumeUpload} accept=".pdf,.doc,.docx" />
                    <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center justify-center">
                        <Upload className="text-blue-500" size={32} />
                        <span className="mt-2 text-sm font-semibold text-blue-600">Upload Resume</span>
                        <span className="text-xs text-gray-500">to auto-fill data (PDF, DOC)</span>
                    </label>
                    {resumeFileName && <p className="text-sm text-green-600 mt-2">Uploaded: {resumeFileName}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" value={formData.name || ''} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded-lg" required />
                    <input name="email" type="email" value={formData.email || ''} onChange={handleChange} placeholder="Email Address" className="w-full p-2 border rounded-lg" required />
                    <input name="title" value={formData.title || ''} onChange={handleChange} placeholder="Job Title" className="w-full p-2 border rounded-lg" required />
                    <input name="department" value={formData.department || ''} onChange={handleChange} placeholder="Department" className="w-full p-2 border rounded-lg" />
                    <select name="team" value={formData.team || ''} onChange={handleChange} className="w-full p-2 border rounded-lg">
                        <option value="">Select Team</option>
                        {teams.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <input name="location" value={formData.location || ''} onChange={handleChange} placeholder="Location" className="w-full p-2 border rounded-lg" />
                    <select name="status" value={formData.status || 'Active'} onChange={handleChange} className="w-full p-2 border rounded-lg">
                        {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" onClick={onClose} className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Cancel</button>
                    <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Save</button>
                </div>
            </form>
        </Modal>
    );
};

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


// --- App Component ---
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

// --- Other components (Onboarding, Analytics, etc.) would be here ---
// For brevity, I'm including only the ones that needed changes or are essential for context.
// The full implementation of the other components can be assumed to be the same as the previous version unless specified.

const Onboarding = ({ candidates, setCandidates }) => {
    const stages = ['Document Submission', 'Background Check', 'Training Scheduled', 'Introductory Info'];
    
    const moveCandidate = (id, direction) => {
        setCandidates(prev => prev.map(candidate => {
            if (candidate.id === id) {
                const currentStageIndex = stages.indexOf(candidate.stage);
                const nextStageIndex = currentStageIndex + direction;
                if (nextStageIndex >= 0 && nextStageIndex < stages.length) {
                    return { ...candidate, stage: stages[nextStageIndex] };
                }
            }
            return candidate;
        }));
    };

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Employee Onboarding</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stages.map(stage => (
                    <div key={stage} className="bg-gray-50 rounded-2xl p-4 space-y-4">
                        <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                           <StatusBadge status={stage} />
                           <span>{stage}</span>
                        </h3>
                        <div className="space-y-4 min-h-[100px]">
                            {candidates.filter(c => c.stage === stage).map(candidate => (
                                <div key={candidate.id} className="bg-white p-4 rounded-lg shadow-sm">
                                    <p className="font-semibold text-gray-800">{candidate.name}</p>
                                    <p className="text-sm text-gray-500">{candidate.position}</p>
                                    <div className="flex justify-between items-center mt-3">
                                        <div className="text-xs text-gray-400">{candidate.city}</div>
                                        <div className="flex gap-2">
                                            <button onClick={() => moveCandidate(candidate.id, -1)} className="text-gray-400 hover:text-gray-600 disabled:opacity-25" disabled={stages.indexOf(stage) === 0}>
                                                <ChevronRight className="h-5 w-5 rotate-180" />
                                            </button>
                                            <button onClick={() => moveCandidate(candidate.id, 1)} className="text-gray-400 hover:text-gray-600 disabled:opacity-25" disabled={stages.indexOf(stage) === stages.length - 1}>
                                                <ChevronRight className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

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

const BackgroundCheck = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Background Checks</h2>
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <ShieldCheck className="mx-auto text-blue-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-700">Secure Background Verification</h3>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Initiate and monitor background checks for candidates and employees. This module integrates with certified third-party verification services to ensure data privacy and compliance. All checks are logged securely and are only accessible to authorized HR Admin personnel.</p>
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Initiate New Check
            </button>
        </div>
    </div>
);

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

const PerformanceAppraisal = ({ reviews }) => (
     <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Performance Appraisals</h2>
        <div className="space-y-6">
            {reviews.map(review => (
                <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-lg font-semibold text-gray-800">{review.employeeName}</p>
                            <p className="text-sm text-gray-500">Reviewed on: {review.reviewDate}</p>
                        </div>
                        <div className="flex items-center gap-2 text-lg font-bold text-yellow-500">
                            <Star size={20} className="fill-current" /> {review.rating}
                        </div>
                    </div>
                    <p className="text-gray-600 mt-4 italic">"{review.summary}"</p>
                    <div className="mt-4">
                        <h4 className="font-semibold text-gray-700">Objectives for next cycle:</h4>
                        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                            {review.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

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
