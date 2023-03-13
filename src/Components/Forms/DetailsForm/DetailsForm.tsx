import React, { ChangeEvent } from 'react';
import TextInput from '../../TextInput';

interface DetailProps {
    minExp: number;
    maxExp: number;
    minSalary: number
    maxSalary: number;
    totalEmp: string;
    applyType: string;
}

interface DetailsFormProps extends DetailProps {
    updateFields: (fields: Partial<DetailProps>)=>void
}

const DetailsForm = ({
    minExp, maxExp, minSalary, maxSalary, totalEmp, applyType, updateFields,
}:DetailsFormProps) => (
    <div>
        <div className="mt-6">
            <span className="mt-6">Experience</span>
            <div className="flex justify-between">
                <TextInput
                    name="minExp"
                    label=""
                    placeholder="Minimum"
                    wrapperClassName="w-1/2 mr-6"
                    type="number"
                    value={minExp === 0 ? '' : minExp}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ minExp: parseInt(e.target.value === '' ? '0' : e.target.value, 10) })}
                />
                <TextInput
                    name="maxExp"
                    label=""
                    placeholder="Maximum"
                    wrapperClassName="w-1/2"
                    type="number"
                    value={maxExp === 0 ? '' : maxExp}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ maxExp: parseInt(e.target.value === '' ? '0' : e.target.value, 10) })}
                />
            </div>
        </div>
        <div className="mt-6">
            <span className="mt-6">Salary</span>
            <div className="flex justify-between">
                <TextInput
                    name="minSalary"
                    label=""
                    placeholder="Minimum"
                    wrapperClassName="w-1/2 mr-6"
                    type="number"
                    value={minSalary === 0 ? '' : minSalary}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ minSalary: parseInt(e.target.value === '' ? '0' : e.target.value, 10) })}
                />
                <TextInput
                    name="maxSalary"
                    label=""
                    placeholder="Maximum"
                    wrapperClassName="w-1/2"
                    type="number"
                    value={maxSalary === 0 ? '' : maxSalary}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ maxSalary: parseInt(e.target.value === '' ? '0' : e.target.value, 10) })}
                />
            </div>
        </div>
        <TextInput
            name="totalEmp"
            label="Total employee"
            wrapperClassName="mt-6"
            placeholder="Ex. 100"
            value={totalEmp}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ totalEmp: e.target.value })}
        />
        <div className="mt-6">
            <span>Apply type</span>
            <div className="flex items-center">
                <div className="flex items-center mr-4">
                    <input
                        type="radio"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ applyType: e.target.value })}
                        checked={applyType === 'Quick apply'}
                        value="Quick apply"
                        name="applyType"
                        className="mt-1 mr-1"
                    />
                    <span>Quick apply</span>
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateFields({ applyType: e.target.value })}
                        checked={applyType === 'External apply'}
                        value="External apply"
                        name="applyType"
                        className="mt-1 mr-1"
                    />
                    <span>External apply</span>
                </div>
            </div>
        </div>
    </div>
);

export default DetailsForm;
