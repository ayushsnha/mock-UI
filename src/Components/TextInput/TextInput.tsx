import React, { ChangeEvent } from 'react';

interface TextInputProps{
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    value: string | number;
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
    err?: string | null;
}

const TextInput = ({
    name = '', label = '', type = 'text', placeholder = '', required = false, value = '', onChange, err = null,
}:TextInputProps) => (
    <div className=" flex flex-col">
        <span>{label}</span>
        <input name={name} value={value} placeholder={placeholder} required={required} type={type} onChange={onChange} />
        {err && <span className="text-error">{err}</span>}
    </div>
);

export default TextInput;
