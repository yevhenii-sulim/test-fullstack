'use client';
import Input from '@/components/ui/input';
import {
  ChangeEvent,
  FocusEventHandler,
  JSX,
  SubmitEvent,
  SyntheticEvent,
  useState,
} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

const body = document.querySelector('body');
console.dir(body);

export default function Search(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get('search') ?? '');

  const applySearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set('search', value.trim());
    } else {
      params.delete('search');
    }

    params.set('page', '1');
    router.replace(`${pathname}?${params.toString()}`);
  };

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    applySearch();
  };

  const onBlur = () => {
    applySearch();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className=' w-full mb-10 flex gap-5'>
        <Input
          type='search'
          placeholder='Enter a searched content'
          name='search'
          onChange={handleChange}
          required={false}
          onBlur={onBlur}
        />
      </form>
    </div>
  );
}
