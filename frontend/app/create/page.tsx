import {createSnippet} from '@/actions/createSnippet';
import FormSnippet from '@/components/formSnippet';
import Label from '@/components/label';
import {tags} from '@/constants/tags';
import {JSX} from 'react';

export default function CreateSnippetPage(): JSX.Element {
  return (
    <div className='flex justify-center w-full max-w-2xl mx-auto'>
      <FormSnippet increment={createSnippet}>
        <div className='flex flex-col gap-2'>
          {tags.map((tag) => (
            <Label tag={tag} key={tag} />
          ))}
        </div>
      </FormSnippet>
    </div>
  );
}
