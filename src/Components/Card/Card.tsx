import React from 'react';
import { Job } from '../../types';

interface HomeProp {
    item: Job
}

const Home = ({ item }:HomeProp) => (
    <div>{item.id}</div>
);

export default Home;
