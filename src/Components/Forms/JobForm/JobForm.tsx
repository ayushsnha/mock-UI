import React, { ChangeEvent } from 'react';
import TextInput from '../../TextInput';

interface JobProps {
    jobTitle: string;
}

interface JobFormProps extends JobProps {
    updateFields: (fields:Partial<JobProps>) => void
}

const JobForm = ({ jobTitle, updateFields }:JobFormProps) => (
    <div>
        <TextInput
            name="jobTitle"
            required
            label="Job Title"
            placeholder="ex. UX UI Designer"
            value={jobTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ jobTitle: e.target.value })}
        />
    </div>
);

export default JobForm;
