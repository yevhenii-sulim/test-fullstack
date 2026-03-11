import {FormState} from '@/actions/updateSnippet';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import React, {useActionState, useEffect} from 'react';

interface Props {
  children: React.ReactNode;
  increment: (
    state: FormState,
    formData: FormData,
    id?: string
  ) => Promise<FormState>;
  defaultData?: {title: string; content: string; type: string};
  onSuccess?: () => void;
}

const initialData = {title: '', content: '', type: ''};

const initialState: FormState = {
  sent: false,
  error: null,
};

export default function FormSnippet({
  children,
  increment,
  defaultData = initialData,
  onSuccess,
}: Props) {
  const [state, formAction, isPending] = useActionState(
    increment,
    initialState
  );

  useEffect(() => {
    if (state.sent) {
      onSuccess?.();
    }
  }, [state.sent, onSuccess]);

  return (
    <form
      action={formAction}
      className='flex flex-col gap-5 w-full border border-border rounded-xl p-4'
    >
      <Input
        placeholder='Enter title'
        name='title'
        defaultValue={defaultData.title}
      />
      <Input
        placeholder='Enter type'
        name='type'
        defaultValue={defaultData.type}
      />
      <textarea
        defaultValue={defaultData.content}
        className='w-full border border-border rounded-xl px-5 py-2'
        name='content'
        placeholder='Enter description'
        required
      />
      <div className='flex flex-col gap-2'>{children}</div>
      <div className='flex justify-end gap-5 mt-5 items-center'>
        {state.error && (
          <p className='text-red-500 font-medium'>{state.error}</p>
        )}
        {state.sent && (
          <p className='text-green-500 font-medium'>
            Snippet created successfully
          </p>
        )}
        <Button title='save' type='submit' disabled={isPending}>
          {isPending && (
            <div className='absolute bottom-0 right-0 h-full w-full bg-blue-300 animate-ping ' />
          )}
        </Button>
      </div>
    </form>
  );
}
