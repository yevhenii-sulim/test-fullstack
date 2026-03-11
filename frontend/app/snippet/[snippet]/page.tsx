import {createSnippet} from '@/actions/createSnippet';
import {deleteSnippet} from '@/actions/deleteSnippet';
import {getSnippet} from '@/actions/getSnippet';
import SnippetPageComponent from '@/components/snippetPageComponent';

interface Props {
  params: Promise<{snippet: string}>;
}

export default async function SnippetPage({params}: Props) {
  const {snippet} = await params;
  const data = await getSnippet(snippet);
  return (
    <div>
      <SnippetPageComponent
        save={createSnippet}
        deleteSnippet={deleteSnippet}
        data={data}
      />
    </div>
  );
}
