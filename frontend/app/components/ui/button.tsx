'use client';

interface Props {
  title: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  title,
  onClick,
  type = 'button',
  disabled = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      className='bg-bg-button text-text-button rounded-md py-1 w-20 text-center disabled:text-gray-400'
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
