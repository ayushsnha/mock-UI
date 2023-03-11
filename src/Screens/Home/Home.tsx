import React from 'react';
import { getJobs } from '../../APIS';
import Card from '../Card';

export interface Job {
    createdAt: string;
    jobTitle: string;
    companyName: string;
    industry: string;
    location: string;
    jobType: string;
    minExp: number;
    maxExp: number;
    minSalary: number;
    maxSalary: number;
    totalEmp: string;
    applyType: string;
    id: string;
}

const Home = () => {
    const { response, error, loading } = getJobs();

    const renderCard = (item:Job) => (
        <Card key={item.id} item={item} />
    );

    return (
        <div className="px-8 py-8">
            <div className="flex align-middle justify-between">
                <h3 className="text-xl font-medium">Jobs</h3>
                <button type="button" className="bg-slate-50 px-4 py-2">Add Job</button>
            </div>
            <div>
                {loading && (
                    <p>Loading...</p>
                )}
                {error && (
                    <p>{error.message}</p>
                )}
            </div>
            <div>
                {
                    !loading && response.data && response.data.map(renderCard)
                }
            </div>
        </div>
    );
};

export default Home;
