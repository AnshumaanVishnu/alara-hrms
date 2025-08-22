export const initialTeams = ['Creative & Distribution', 'Analytics', 'Graphics', 'Technology', 'Human Resources', 'Product', 'Design'];

export const mockEmployeesData = [
    { id: 1, name: 'Priya Sharma', email: 'priya.sharma@alara.com', title: 'Senior Software Engineer', department: 'Technology', team: 'Technology', status: 'Active', hireDate: '2022-01-15', location: 'Bengaluru', skills: ['React', 'Node.js', 'AWS'], age: 32, gender: 'Female', performance: 4.5, leaveBalance: 15 },
    { id: 2, name: 'Rohan Mehta', email: 'rohan.mehta@alara.com', title: 'HR Director', department: 'Human Resources', team: 'Human Resources', status: 'Active', hireDate: '2021-05-20', location: 'Mumbai', skills: ['Recruiting', 'Policy Making', 'Payroll'], age: 38, gender: 'Male', performance: 4.8, leaveBalance: 12 },
    { id: 3, name: 'Aarav Singh', email: 'aarav.singh@alara.com', title: 'Product Manager', department: 'Product', team: 'Product', status: 'On Leave', hireDate: '2023-02-10', location: 'Delhi', skills: ['Agile', 'JIRA', 'Roadmapping'], age: 30, gender: 'Male', performance: 4.2, leaveBalance: 5 },
    { id: 4, name: 'Ananya Gupta', email: 'ananya.gupta@alara.com', title: 'Lead UX Designer', department: 'Design', team: 'Graphics', status: 'Active', hireDate: '2022-09-01', location: 'Pune', skills: ['Figma', 'User Research', 'Prototyping'], age: 34, gender: 'Female', performance: 4.9, leaveBalance: 18 },
    { id: 5, name: 'Vikram Patel', email: 'vikram.patel@alara.com', title: 'DevOps Lead', department: 'Technology', team: 'Technology', status: 'Terminated', hireDate: '2021-11-11', location: 'Hyderabad', skills: ['Kubernetes', 'Docker', 'CI/CD'], age: 41, gender: 'Male', performance: 3.8, leaveBalance: 0 },
    { id: 6, name: 'Saanvi Reddy', email: 'saanvi.reddy@alara.com', title: 'Data Scientist', department: 'Analytics', team: 'Analytics', status: 'Active', hireDate: '2023-07-19', location: 'Bengaluru', skills: ['Python', 'TensorFlow', 'SQL'], age: 29, gender: 'Female', performance: 4.6, leaveBalance: 20 },
    { id: 7, name: 'Arjun Kumar', email: 'arjun.kumar@alara.com', title: 'Content Writer', department: 'Marketing', team: 'Creative & Distribution', status: 'Resigned', hireDate: '2022-03-12', location: 'Mumbai', skills: ['SEO', 'Content Strategy'], age: 28, gender: 'Male', performance: 4.1, leaveBalance: 0 },
    { id: 8, name: 'Diya Singh', email: 'diya.singh@alara.com', title: 'Graphic Designer', department: 'Design', team: 'Graphics', status: 'Contract Closure', hireDate: '2023-01-05', location: 'Pune', skills: ['Illustrator', 'Photoshop'], age: 26, gender: 'Female', performance: 4.3, leaveBalance: 0 },
];

export const mockOnboardingCandidatesData = [
    { id: 101, name: 'Aditya Rao', position: 'Junior Developer', stage: 'Document Submission', city: 'Chennai', skills: ['JavaScript', 'HTML', 'CSS'], experience: 1, age: 24, gender: 'Male' },
    { id: 102, name: 'Isha Nair', position: 'Marketing Intern', stage: 'Training Scheduled', city: 'Mumbai', skills: ['Social Media', 'Content Writing'], experience: 0, age: 22, gender: 'Female' },
    { id: 103, name: 'Kabir Joshi', position: 'Senior Accountant', stage: 'Introductory Info', city: 'Delhi', skills: ['Tally', 'GST', 'Auditing'], experience: 5, age: 31, gender: 'Male' },
    { id: 104, name: 'Diya Verma', position: 'HR Executive', stage: 'Background Check', city: 'Pune', skills: ['Communication', 'MS Office'], experience: 2, age: 26, gender: 'Female' },
];

export const mockLeaveRequestsData = [
    { id: 1, employeeName: 'Priya Sharma', startDate: '2025-08-01', endDate: '2025-08-05', type: 'Vacation', status: 'Approved' },
    { id: 2, employeeName: 'Ananya Gupta', startDate: '2025-07-25', endDate: '2025-07-25', type: 'Sick Leave', status: 'Pending' },
    { id: 3, employeeName: 'Aarav Singh', startDate: '2025-09-10', endDate: '2025-09-20', type: 'Personal Leave', status: 'Approved' },
    { id: 4, employeeName: 'Saanvi Reddy', startDate: '2025-08-12', endDate: '2025-08-13', type: 'Vacation', status: 'Pending' },
];

export const mockAssetsData = [
    { id: 1, asset: 'MacBook Pro 16"', employeeName: 'Priya Sharma', assignedDate: '2022-01-20', status: 'In Use', returnCondition: 'N/A' },
    { id: 2, asset: 'Dell XPS 15', employeeName: 'Rohan Mehta', assignedDate: '2021-06-01', status: 'In Use', returnCondition: 'N/A' },
    { id: 3, asset: 'iPhone 15 Pro', employeeName: 'Aarav Singh', assignedDate: '2023-02-15', status: 'In Use', returnCondition: 'N/A' },
    { id: 4, asset: 'Logitech MX Master 3', employeeName: 'Ananya Gupta', assignedDate: '2022-09-01', status: 'Returned', returnCondition: 'Good' },
    { id: 5, asset: 'Samsung S23 Ultra', employeeName: 'Saanvi Reddy', assignedDate: '2023-07-20', status: 'In Use', returnCondition: 'N/A' },
];

export const mockPerformanceReviewsData = [
    { id: 1, employeeName: 'Priya Sharma', reviewDate: '2025-06-30', rating: 4.5, summary: 'Exceeded expectations in Q2 projects, showing great technical leadership.', objectives: ['Launch payment gateway integration', 'Mentor two junior developers'] },
    { id: 2, employeeName: 'Rohan Mehta', reviewDate: '2025-06-15', rating: 4.8, summary: 'Excellent leadership and strategic initiatives in talent acquisition.', objectives: ['Reduce time-to-hire by 15%', 'Implement new employee wellness program'] },
    { id: 3, employeeName: 'Ananya Gupta', reviewDate: '2025-06-28', rating: 4.9, summary: 'Outstanding design work and user-centric approach have significantly improved product engagement.', objectives: ['Redesign the mobile app dashboard', 'Conduct 5 user testing sessions'] },
    { id: 4, employeeName: 'Saanvi Reddy', reviewDate: '2025-12-20', rating: 4.6, summary: 'Developed predictive models that increased sales forecast accuracy by 20%.', objectives: ['Improve model accuracy further', 'Publish a research paper'] },
];

export const mockUserRoles = [
    { id: 1, role: 'HR Admin', permissions: ['Full Access to all modules'] },
    { id: 2, role: 'HR Manager', permissions: ['View team data', 'Approve leaves', 'Conduct performance reviews for team'] },
    { id: 3, role: 'HR Assistant', permissions: ['View own profile', 'Request leave', 'View assigned assets'] },
    { id: 4, role: 'Finance Executive', permissions: ['Access payroll related data', 'View employee compensation details'] },
];
