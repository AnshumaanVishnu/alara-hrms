import React from 'react';

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

export default Table;
