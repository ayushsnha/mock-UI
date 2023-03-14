/* eslint-disable max-len */
import React from 'react';
import { Job } from '../../types';
import SVG from '../../assets/nf-logo.png';

interface HomeProp {
    item: Job;
    deleteData: Function;
}

const Home = ({ item, deleteData }:HomeProp) => (
    <div className="px-6  py-4 bg-card border-secondary border flex p-4 rounded-lg group" style={{ minHeight: '320px' }}>
        <div className=" mr-2">
            <img src={SVG} alt="logo" style={{ maxWidth: '48px', maxHeight: '48px' }} />
        </div>
        <div className=" flex flex-col w-full">
            <div className="flex justify-between items-center">
                <h5 className="text-xxl font-normal">{item.jobTitle}</h5>
                <button type="button" onClick={() => deleteData(item.id)} className="hidden active:scale-90 group-hover:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-error">
                        <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            <span className=" text-m">{`${item.companyName} - ${item.industry}`}</span>
            <span className="text-m text-secondary">{`${item.location ? item.location : '-'} ${item.jobType ? `(${item.jobType})` : ''}`}</span>
            <div className="my-6 flex flex-col">
                <span className="text-m">Part-Time (9.00 am - 5.00 pm IST)</span>
                <span className="text-m my-2">{`Experience (${item.minExp} - ${item.maxExp} years)`}</span>
                <span className="text-m mb-2">{`INR (₹) ${new Intl.NumberFormat().format(item.minSalary)} - ${new Intl.NumberFormat().format(item.maxSalary)} / Month`}</span>
                <span className="text-m">{`${item.totalEmp || 0} employees`}</span>
            </div>
            <div className="">
                {
                    (item.applyType === 'Quick apply' && <button className="bg-primary px-4 py-2 rounded-md text-white" type="button">Apply Now</button>)

                    || (item.applyType === 'External apply' && <button className="border-primary border px-4 py-2 rounded-md text-primary" type="button">External Apply</button>)
                }
            </div>
        </div>
    </div>
);

export default Home;
