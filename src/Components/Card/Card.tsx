import React from 'react';
import { Job } from '../../types';
import SVG from '../../assets/nf-logo.png';

interface HomeProp {
    item: Job
}

const Home = ({ item }:HomeProp) => (
    <div className="px-6  py-4 bg-card border-secondary border flex p-4 rounded-lg" style={{ minHeight: '320px' }}>
        <div className=" mr-2">
            <img src={SVG} alt="logo" style={{ maxWidth: '48px', maxHeight: '48px' }} />
        </div>
        <div className=" flex flex-col">
            <h5 className="text-xxl font-normal">{item.jobTitle}</h5>
            <span className=" text-m">{`${item.companyName} - ${item.industry}`}</span>
            <span className="text-m text-secondary">{`${item.location} (${item.jobType})`}</span>
            <div className="my-6 flex flex-col">
                <span className="text-m">Part-Time (9.00 am - 5.00 pm IST)</span>
                <span className="text-m my-2">{`Experience (${item.minExp} - ${item.maxExp} years)`}</span>
                <span className="text-m mb-2">{`INR (₹) ${item.minSalary} - ${item.maxSalary} / Month`}</span>
                <span className="text-m">{`${item.totalEmp} employees`}</span>
            </div>
            <div className="">
                {
                    item.applyType === 'Quick apply'
                        ? <button className="bg-primary px-4 py-2 rounded-md text-white" type="button">Apply Now</button>
                        : <button className="border-primary border px-4 py-2 rounded-md text-primary" type="button">External Apply</button>
                }
            </div>
        </div>
    </div>
);

export default Home;
