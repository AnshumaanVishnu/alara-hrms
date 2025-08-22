import React from 'react';
import { ChevronRight } from 'lucide-react';
import StatusBadge from './StatusBadge';

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

export default Onboarding;
