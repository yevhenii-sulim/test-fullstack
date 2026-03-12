'use client';
import FormSnippet from '@/components/formSnippet';
import Snippet from '@/components/snippet';
import Button from '@/components/ui/button';
import {FormState, SnippetI} from '@/types/snippet';
import {JSX, useState} from 'react';
import {tags} from '@/constants/tags';
import Label from '@/components/label';

interface Props {
  update: (
    state: FormState,
    formData: FormData,
    id?: string
  ) => Promise<FormState>;
  deleteSnippet: (id: string) => Promise<void>;
  data: SnippetI;
}

export default function SnippetPageComponent({
  update,
  deleteSnippet,
  data,
}: Props): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);

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
          increment={update}
          defaultData={data}
          onSuccess={handleSuccessEdit}
        >
          <input type='hidden' name='id' value={data._id} />
          <div className='flex flex-col gap-2'>
            {tags.map((tag) => (
              <Label tag={tag} defaultChecked={isChecked(tag)} key={tag} />
            ))}
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
