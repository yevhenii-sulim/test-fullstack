import {InputHTMLAttributes, JSX} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
}

export default function Input({
  type = 'text',
  placeholder,
  name,
  defaultValue = '',
  ...props
}: Props): JSX.Element {
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
