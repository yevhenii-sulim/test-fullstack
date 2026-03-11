import React from 'react';

interface Props {
  type?: string;
  placeholder: string;
  name: string;
  defaultValue?: string;
}

export default function Input({
  type = 'text',
  placeholder,
  name,
  defaultValue = '',
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className='mx-auto w-full border border-border rounded-xl px-5 py-2'
      required
      defaultValue={defaultValue}
    />
  );
}
