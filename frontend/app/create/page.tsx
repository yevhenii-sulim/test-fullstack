'use client';

import {createSnippet} from '@/actions/createSnippet';
import FormSnippet from '@/components/formSnippet';

export default function CreateSnippetPage() {
  return (
    <div className='flex justify-center w-full max-w-2xl mx-auto'>
      <FormSnippet increment={createSnippet}>
        <div className='flex flex-col gap-2'>
          <label className='flex gap-2 items-center py-2 cursor-pointer'>
            <input type='checkbox' name='tags' value='react' />
            React
          </label>

          <label className='flex gap-2 items-center py-2 cursor-pointer'>
            <input type='checkbox' name='tags' value='nextjs' />
            Next.js
          </label>

          <label className='flex gap-2 items-center py-2 cursor-pointer'>
            <input type='checkbox' name='tags' value='typescript' />
            TypeScript
          </label>
        </div>
      </FormSnippet>
    </div>
  );
}
