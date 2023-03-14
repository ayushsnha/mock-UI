import React, { ChangeEvent } from 'react';
import TextInput from '../../TextInput';

interface JobProps {
    jobTitle: string;
    companyName: string;
    industry: string;
    jobType: string;
    location: string;
}

interface JobFormProps extends JobProps {
    updateFields: (fields:Partial<JobProps>) => void
    formErrors:Partial<JobProps>
}

const JobForm = ({
    jobTitle, companyName, industry, jobType, location, updateFields, formErrors,
}:JobFormProps) => (
    <div>
        <TextInput
            name="companyName"
            label="Company Name"
            placeholder="ex. Google"
            value={companyName}
            isRequired
            wrapperClassName="mt-6"
            err={formErrors.companyName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ companyName: e.target.value })}
        />
        <TextInput
            name="jobTitle"
            label="Job Title"
            placeholder="ex. UX UI Designer"
            value={jobTitle}
            isRequired
            wrapperClassName="mt-6"
            err={formErrors.jobTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ jobTitle: e.target.value })}
        />
        <TextInput
            name="industry"
            label="Industry"
            placeholder="ex. Information Technology"
            value={industry}
            isRequired
            wrapperClassName="mt-6"
            err={formErrors.industry}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ industry: e.target.value })}
        />
        <div className="flex">
            <TextInput
                name="location"
                label="Location"
                placeholder="ex. Chennai"
                value={location}
                err={formErrors.location}
                className=""
                wrapperClassName="w-1/2 mr-6 mt-6"
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ location: e.target.value })}
            />
            <TextInput
                name="jobType"
                label="Remote Type"
                placeholder="ex. In-office"
                wrapperClassName="w-1/2 mt-6"
                value={jobType}
                err={formErrors.jobType}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ jobType: e.target.value })}
            />
        </div>
    </div>
);

export default JobForm;
