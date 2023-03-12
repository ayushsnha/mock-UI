import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'https://640b3b0981d8a32198de31c8.mockapi.io/api';

const useAxios = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(false);

    const sendReq = async (params: AxiosRequestConfig | null) => {
        try {
            const result = await axios.request(params);
            setResponse(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const get = async () => {
        setLoading(true);
        await sendReq(axiosParams);
    };

    useEffect(() => {
        if (axiosParams.method === 'GET') {
            get();
        }
    }, []);

    return {
        response, error, loading, get,
    };
};

export default useAxios;
