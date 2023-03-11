import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://640b3b0981d8a32198de31c8.mockapi.io/api';

const useAxios = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            const result = await axios.request(params);
            setResponse(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []);

    return { response, error, loading };
};

export default useAxios;
