import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { getJobs } from '../../APIS';
import { Card, Modal } from '../../Components';
import { Job } from '../../types';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [job, setJob] = useState([]);
    const { response, error, loading } = getJobs();

    useEffect(() => {
        if (response && response.data) {
            setJob(response.data);
        }
    }, [loading]);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const renderCard = (item:Job) => (
        <Card key={item.id} item={item} />
    );

    return (
        <div className="px-8 py-8">
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
            <div>
                {
                    !loading && job && job.map(renderCard)
                }
            </div>
        </div>
    );
};

export default Home;
