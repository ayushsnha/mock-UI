import React from 'react';
import { Job } from '../../Screens/Home/Home';

interface HomeProp {
    item: Job
}

const Home = ({ item }:HomeProp) => (
    <div>{item.id}</div>
);

export default Home;
