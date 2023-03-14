import axios, { AxiosError } from 'axios';
import React from 'react';
import { Job } from '../types';

const postJob = async (data: Job, setError:React.Dispatch<React.SetStateAction<AxiosError<unknown, any>>>) => {
    let response:any = {};
    try {
        response = await axios.post('https://640b3b0981d8a32198de31c8.mockapi.io/api/jobs', data);
    } catch (error) {
        setError(error);
    }
    return response;
};

export default postJob;
