import {deleteSnippet} from '@/app/actions/deleteSnippet';
import {saveSnippet} from '@/app/actions/saveSnippet';
import Snippet from '@/app/components/snippet';

interface Props {
  params: Promise<{snippet: string}>;
}

export default async function SnippetPage({params}: Props) {
  const {snippet} = await params;
  return (
    <div>
      <h1 className='text-center font-bold my-6'>{snippet}</h1>
      <Snippet save={saveSnippet} deleteSnippet={deleteSnippet} data='dasdas' />
    </div>
  );
}
