import React, { useState, useEffect } from 'react';
import { Upload } from 'lucide-react';
import Modal from './Modal';

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

export default EmployeeFormModal;
