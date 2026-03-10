'use client';
import {FormState, increment} from '@/app/actions/edit';
import Button from '@/app/components/ui/button';
import {useActionState, useState} from 'react';

interface Props {
  save: () => Promise<void>;
  deleteSnippet: () => Promise<void>;
  data: string;
}

export default function Snippet({save, deleteSnippet, data}: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const initialState: FormState = {sent: false, error: null};
  const [_, formAction, pending] = useActionState<FormState, FormData>(
    increment,
    initialState
  );

  const handleEdit = async () => {
    if (isEdit) {
      await save();
      setIsEdit(false);
      return;
    }
    setIsEdit(true);
  };

  if (isEdit)
    return (
      <div className='max-w-2xl mx-auto border border-border rounded-xl p-4'>
        <form action={formAction}>
          <textarea
            className='w-full outline-0'
            name='message'
            placeholder='Enter your message'
            defaultValue={data}
          />
          <div className='flex justify-end gap-5 mt-5'>
            <Button
              title='save'
              type='submit'
              onClick={handleEdit}
              disabled={pending}
            />
          </div>
        </form>
      </div>
    );

  return (
    <div className='max-w-2xl mx-auto border border-border rounded-xl p-4'>
      {data}

      <div className='flex justify-end gap-5 mt-5'>
        <Button title='delete' onClick={deleteSnippet} />
        <Button title='edit' onClick={handleEdit} />
      </div>
    </div>
  );
}
