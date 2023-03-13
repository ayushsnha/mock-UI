import React, { ChangeEvent } from 'react';

interface TextInputProps{
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    value: string | number;
    isRequired?: boolean;
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
    err?: string | null;
    className?: string;
    wrapperClassName?: string;
}

const TextInput = ({
    name = '', label = '', type = 'text', placeholder = '',
    required = false, value = '', onChange, err = null,
    isRequired = false, className = '', wrapperClassName = '',
}:TextInputProps) => (
    <div className={`flex flex-col ${wrapperClassName}`}>
        {isRequired ? (
            <div className="mb-1">
                <span className="text-dark text-s font-medium">{label}</span>
                <span className="text-error text-s font-medium">*</span>
            </div>
        ) : <span className="text-dark text-s font-medium mb-1">{label}</span>}
        <input
            name={name}
            className={`placeholder:text-placeholder text-s py-2 px-1 border border-secondary focus:border-primary rounded-md ${className}`}
            value={value}
            placeholder={placeholder}
            required={required}
            type={type}
            onChange={onChange}
        />
        {err && <span className="text-error text-s">{err}</span>}
    </div>
);

export default TextInput;
