import React, { ChangeEvent } from 'react';

interface TextInputProps{
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    value: string | number;
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
}

const TextInput = ({
    name = '', label = '', type = 'text', placeholder = '', required = false, value = '', onChange,
}:TextInputProps) => (
    <div className=" flex flex-col">
        <span>{label}</span>
        <input name={name} value={value} placeholder={placeholder} required={required} type={type} onChange={onChange} />
    </div>
);

export default TextInput;
