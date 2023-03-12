import React, { ChangeEvent } from 'react';
import TextInput from '../../TextInput';

interface JobProps {
    jobTitle: string;
    companyName: string;
    industry: string;
}

interface JobFormProps extends JobProps {
    updateFields: (fields:Partial<JobProps>) => void
    formErrors:Partial<JobProps>
}

const JobForm = ({
    jobTitle, companyName, industry, updateFields, formErrors,
}:JobFormProps) => (
    <div>
        <TextInput
            name="companyName"
            label="Company Name"
            placeholder="ex. Google"
            value={companyName}
            err={formErrors.companyName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ companyName: e.target.value })}
        />
        <TextInput
            name="jobTitle"
            label="Job Title"
            placeholder="ex. UX UI Designer"
            value={jobTitle}
            err={formErrors.jobTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ jobTitle: e.target.value })}
        />
        <TextInput
            name="industry"
            label="Industry"
            placeholder="ex. Information Technology"
            value={industry}
            err={formErrors.industry}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ industry: e.target.value })}
        />
    </div>
);

export default JobForm;
