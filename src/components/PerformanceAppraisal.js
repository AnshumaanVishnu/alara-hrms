import React from 'react';
import { Star } from 'lucide-react';

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

export default PerformanceAppraisal;
