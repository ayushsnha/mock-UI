import React, { FormEvent, useState, useEffect } from 'react';
import './modal.css';

import { AxiosError } from 'axios';

import { DetailsForm, JobForm } from '../Forms';
import useMultistepForm from '../../Hooks/useMultistepForm';
import { Job } from '../../types';
import { postJob } from '../../APIS';
import INITIALVALUE from '../../constants/initialValue';

const Modal = ({ onClose, setJob }:any) => {
    const [data, setData] = useState(INITIALVALUE);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(false);

    const updateFields = (fields: Partial<Job>) => {
        setData((prev) => ({
            ...prev,
            ...fields,
        }));
    };

    const validate = (values: Job) => {
        const errors:Partial<Job> = {};

        if (!values.companyName) {
            errors.companyName = 'Company Name is required';
        }
        if (!values.jobTitle) {
            errors.jobTitle = 'Job Title is required';
        }
        if (!values.industry) {
            errors.industry = 'Industry is required';
        }
        return errors;
    };

    const {
        currentStepIndex, step, next, back, isLastStep,
    } = useMultistepForm([<JobForm {...data} formErrors={formErrors} updateFields={updateFields} />, <DetailsForm {...data} updateFields={updateFields} />]);

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormErrors(validate(data));
        setIsSubmit(true);
    };

    const postData = async () => {
        const resp = await postJob(data, setLoading, setError);
        if (resp.data) {
            setJob((prevData: Job[]) => [...prevData, resp.data]);
        }
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            if (!isLastStep) {
                next();
            } else {
                postData();
                setFormErrors({});
                setIsSubmit(false);
                onClose();
            }
        }
    }, [formErrors]);

    // console.log(response?.data);

    return (
        <div className="modal-overlay">
            <div className="modal-wrapper rounded-lg border border-primary">
                <div className="modal-header">
                    <h2 className="text-xl font-bold">My Modal Title</h2>
                    <div className="">
                        {`Step ${currentStepIndex + 1}` }
                    </div>
                    <button type="button" className="modal-close" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={onSubmit}>
                        {step}
                        { currentStepIndex > 0 && (
                            <div>
                                <button type="button" disabled={loading} onClick={back}>Back</button>
                            </div>
                        )}
                        <div>

                            {loading ? <button disabled type="submit">Saving...</button> : <button type="submit">{isLastStep ? 'Save' : 'Next'}</button>}
                        </div>
                    </form>
                    {error && (
                        <span className="text-error">
                            Error:
                            {error.message}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
