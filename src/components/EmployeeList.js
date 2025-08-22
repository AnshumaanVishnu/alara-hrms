import React, { useState, useMemo } from 'react';
import { ChevronRight, Search, Filter, Edit, Trash2, PlusCircle } from 'lucide-react';
import Table from './Table';
import StatusBadge from './StatusBadge';

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

export default EmployeeList;
