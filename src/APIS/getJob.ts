import useAxios from '../Hooks/useAxios';

const getJob = (id:string) => {
    const { response, loading, error } = useAxios({
        method: 'GET',
        url: `https://640b3b0981d8a32198de31c8.mockapi.io/api/jobs/${id}`,
    });
    return { response, loading, error };
};

export default getJob;
