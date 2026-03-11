'use client';

import clsx from 'clsx';

interface Props {
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children?: React.ReactNode;
  style?: string;
}

export default function Button({
  title,
  onClick,
  children,
  type = 'button',
  disabled = false,
  style,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-bg-button text-text-button rounded-md py-1 w-20 text-center disabled:text-gray-400 relative overflow-hidden',
        style
      )}
      type={type}
      disabled={disabled}
    >
      {title}
      {children}
    </button>
  );
}
