import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { deleteJob, getJobs } from '../../APIS';
import { Card, Modal } from '../../Components';
import { Job } from '../../types';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [job, setJob] = useState([]);
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);

    const fetchJobs = async () => {
        const response = await getJobs(setError);
        if (response) {
            setJob(response.data);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const deleteData = async (id: string) => {
        const response = await deleteJob(id, setError);
        if (response?.data?.id) {
            setJob(job.filter((j) => j.id !== response.data.id));
        }
    };

    const renderCard = (item:Job) => (
        <Card key={item.id} deleteData={deleteData} item={item} />
    );

    return (
        <div className="px-8 py-8 bg-main" style={{ minHeight: 'calc(100% - 60px)' }}>
            <div className="flex align-middle justify-between">
                <h3 className="text-xl text-dark font-medium">Jobs</h3>
                <button type="button" className="px-4 py-2 text-light bg-primary rounded-md" onClick={handleOpenModal}>Add Job</button>
            </div>
            {isOpen
            && ReactDOM.createPortal(
                <Modal onClose={handleCloseModal} setJob={setJob} />,
                document.getElementById('overlay'),
            )}
            <div>
                {loading && (
                    <p>Loading...</p>
                )}
                {error && (
                    <p>{error.message}</p>
                )}
            </div>
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 my-6">
                {
                    !loading && job && job.map(renderCard)
                }
            </div>
        </div>
    );
};

export default Home;
