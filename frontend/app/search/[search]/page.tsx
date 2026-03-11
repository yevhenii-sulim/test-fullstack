import {getAllSnippet} from '@/actions/getAllSnippets';
import Snippet from '@/components/snippet';
import Link from 'next/link';

interface Props {
  params: Promise<{search: string}>;
}

export default async function SnippetPage({params}: Props) {
  const {search} = await params;
  const data = await getAllSnippet(search);
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-10 mx-auto font-sans dark:bg-black'>
      {data.map((item) => (
        <li
          key={item._id}
          className='flex justify-center w-full border border-border rounded-xl px-5 py-2 '
        >
          <Link href={`snippet/${item._id}`} className='w-full'>
            <Snippet data={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
