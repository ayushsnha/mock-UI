import useAxios from '../Hooks/useAxios';

const getJobs = () => {
    const { response, loading, error } = useAxios({
        method: 'GET',
        url: 'https://640b3b0981d8a32198de31c8.mockapi.io/api/jobs',
    });
    return { response, loading, error };
};

export default getJobs;
