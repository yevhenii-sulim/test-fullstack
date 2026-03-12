import React from 'react';

interface Props {
  tag: string;
  defaultChecked?: boolean;
}

export default function Label({tag, defaultChecked = false}: Props) {
  return (
    <label
      key={tag}
      className='flex gap-2 items-center py-2 cursor-pointer capitalize'
    >
      <input
        type='checkbox'
        name='tags'
        value={tag}
        defaultChecked={defaultChecked}
      />
      {tag}
    </label>
  );
}
