'use client';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import {FormState} from '@/types/snippet';
import {ChangeEvent, useState} from 'react';
import {useRouter} from 'next/navigation';

const initialState: FormState = {
  sent: false,
  error: null,
};

export default function Search() {
  const [value, setValue] = useState<string>('');
  const router = useRouter();

  const increment = (value: string) => router.replace(`search/${value}`);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className=' w-full mb-10 flex gap-5 px-5'>
        <Input
          type='search'
          placeholder='Enter a searched content'
          name='search'
          onChange={handleChange}
        />
        <Button title='search' onClick={() => increment(value)} />
      </div>
    </div>
  );
}
