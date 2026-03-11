'use client';
import {createSnippet} from '@/actions/createSnippet';
import FormSnippet from '@/components/formSnippet';
import Snippet from '@/components/snippet';
import Button from '@/components/ui/button';
import {FormState, SnippetI} from '@/types/snippet';
import {useState} from 'react';
import {useRouter} from 'next/navigation';

interface Props {
  save: (
    state: FormState,
    formData: FormData,
    id?: string
  ) => Promise<FormState>;
  deleteSnippet: (id: string) => Promise<void>;
  data: SnippetI;
}

export default function SnippetPageComponent({
  save,
  deleteSnippet,
  data,
}: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  const handleEdit = async () => {
    setIsEdit(true);
  };

  const isChecked = (tag: string) => data && data.tags.includes(tag);

  const handleSuccessEdit = () => {
    setIsEdit(false);
  };

  if (isEdit)
    return (
      <div className='max-w-2xl mx-auto border border-border rounded-xl p-4'>
        <FormSnippet
          increment={save}
          defaultData={data}
          onSuccess={handleSuccessEdit}
        >
          <div className='flex flex-col gap-2'>
            <label className='flex gap-2 items-center py-2 cursor-pointer'>
              <input
                type='checkbox'
                name='tags'
                value='react'
                defaultChecked={isChecked('react')}
              />
              React
            </label>

            <label className='flex gap-2 items-center py-2 cursor-pointer'>
              <input
                type='checkbox'
                name='tags'
                value='nextjs'
                defaultChecked={isChecked('nextjs')}
              />
              Next.js
            </label>

            <label className='flex gap-2 items-center py-2 cursor-pointer'>
              <input
                type='checkbox'
                name='tags'
                value='typescript'
                defaultChecked={isChecked('typescript')}
              />
              TypeScript
            </label>
          </div>
        </FormSnippet>
      </div>
    );

  return (
    <div className='max-w-2xl min-w-2xs mx-auto border border-border rounded-xl p-4'>
      <Snippet data={data} />
      <div className='flex justify-end gap-5 mt-5'>
        <Button
          title='delete'
          onClick={async () => {
            if (!data._id) return;
            await deleteSnippet(data._id);
          }}
        />
        <Button title='edit' onClick={handleEdit} />
      </div>
    </div>
  );
}
