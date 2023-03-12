import useAxios from '../Hooks/useAxios';
import { Job } from '../types';

const postJob = (data: Job) => {
    const {
        post, error, loading, response,
    } = useAxios({
        method: 'POST',
        url: 'https://640b3b0981d8a32198de31c8.mockapi.io/api/jobs',
    });

    const handleSubmit = async () => {
        await post(data);
    };

    return {
        handleSubmit, error, loading, response,
    };
};

export default postJob;
