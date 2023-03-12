import React, { FormEvent, useState, useEffect } from 'react';
import './modal.css';

import { DetailsForm, JobForm } from '../Forms';
import useMultistepForm from '../../Hooks/useMultistepForm';
import { Job } from '../../types';
import { postJob } from '../../APIS';

const INITIALDATA:Job = {
    createdAt: '',
    jobTitle: '',
    companyName: '',
    industry: '',
    location: '',
    jobType: '',
    minExp: 0,
    maxExp: 0,
    minSalary: 0,
    maxSalary: 0,
    totalEmp: '',
    applyType: '',
    id: '',
};

const Modal = ({ onClose }:any) => {
    const [data, setData] = useState(INITIALDATA);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const {
        handleSubmit, error, loading,
    } = postJob(data);

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

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            if (!isLastStep) {
                next();
            } else {
                handleSubmit();
            }
        }
    }, [formErrors]);

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
