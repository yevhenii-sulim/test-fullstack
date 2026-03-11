import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
}

export default function Input({
  type = 'text',
  placeholder,
  name,
  defaultValue = '',
  ...props
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className='mx-auto w-full border border-border rounded-xl px-5 py-2'
      required
      defaultValue={defaultValue}
      {...props}
    />
  );
}
