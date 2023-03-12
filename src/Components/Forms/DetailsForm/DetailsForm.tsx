import React, { ChangeEvent } from 'react';
import TextInput from '../../TextInput';

interface DetailProps {
    minExp: number;
    maxExp: number;
}

interface DetailsFormProps extends DetailProps {
    updateFields: (fields: Partial<DetailProps>)=>void
}

const DetailsForm = ({ minExp, maxExp, updateFields }:DetailsFormProps) => (
    <div>
        <TextInput
            name="minExp"
            label=""
            placeholder="Minimum"
            value={minExp || 0}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ minExp: parseInt(e.target.value, 10) })}
        />
        <TextInput
            name="maxExp"
            label=""
            placeholder="Maximum"
            value={maxExp || 0}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ maxExp: parseInt(e.target.value, 10) })}
        />
    </div>
);

export default DetailsForm;
