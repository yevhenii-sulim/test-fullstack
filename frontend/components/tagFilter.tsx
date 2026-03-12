'use client';

import {JSX} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

interface Props {
  tag: string;
}

export default function TagFilter({tag}: Props): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedTags = searchParams.getAll('tags');
  const checked = selectedTags.includes(tag);

  const toggleTag = () => {
    const params = new URLSearchParams(searchParams.toString());

    const currentTags = params.getAll('tags');
    params.delete('tags');

    const nextTags = currentTags.includes(tag)
      ? currentTags.filter((t) => t !== tag)
      : [...currentTags, tag];

    nextTags.forEach((t) => params.append('tags', t));
    params.set('page', '1');

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <label className='flex gap-2 items-center py-2 cursor-pointer capitalize'>
      <input
        type='checkbox'
        name='tags'
        value={tag}
        checked={checked}
        onChange={toggleTag}
      />
      {tag}
    </label>
  );
}
