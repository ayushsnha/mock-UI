import React from 'react';
import { Job } from '../../types';

interface HomeProp {
    item: Job
}

const Home = ({ item }:HomeProp) => (
    <div className="px-6  py-4 bg-card border-primary border flex flex-col p-4 rounded-lg">
        <h5>{item.jobTitle}</h5>
    </div>
);

export default Home;
