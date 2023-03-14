import axios, { AxiosError } from 'axios';
import React from 'react';

const getJobs = async (setError:React.Dispatch<React.SetStateAction<AxiosError<unknown, any>>>) => {
    let response:any = {};
    try {
        response = await axios.get('https://640b3b0981d8a32198de31c8.mockapi.io/api/jobs');
    } catch (error) {
        setError(error);
    }
    return response;
};

export default getJobs;
