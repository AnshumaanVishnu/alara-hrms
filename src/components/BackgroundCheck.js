import React from 'react';
import { ShieldCheck } from 'lucide-react';

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

export default BackgroundCheck;
