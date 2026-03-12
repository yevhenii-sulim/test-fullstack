import {deleteSnippet} from '@/actions/deleteSnippet';
import {getSnippet} from '@/actions/getSnippet';
import {updateSnippet} from '@/actions/updateSnippet';
import SnippetPageComponent from '@/components/snippetPageComponent';
import {JSX} from 'react';

interface Props {
  params: Promise<{snippet: string}>;
}

export default async function SnippetPage({
  params,
}: Props): Promise<JSX.Element> {
  const {snippet} = await params;
  const data = await getSnippet(snippet);

  return (
    <div>
      <SnippetPageComponent
        update={updateSnippet}
        deleteSnippet={deleteSnippet}
        data={data}
      />
    </div>
  );
}
