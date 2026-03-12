import {getAllSnippet} from '@/actions/getAllSnippets';
import Search from '@/components/search';
import Snippet from '@/components/snippet';
import Link from 'next/link';
import {JSX} from 'react';

type Props = {
  searchParams: {
    search?: string;
    tags?: string | string[];
    page?: string;
  };
};

export default async function Home({
  searchParams,
}: Props): Promise<JSX.Element> {
  const params = await searchParams;
  const search = params.search ?? '';
  const page = Number(params.page ?? '1');

  const tags = Array.isArray(params.tags)
    ? params.tags
    : params.tags
      ? [params.tags]
      : [];

  console.log('search', search);
  console.log('page', page);
  console.log('tags', tags);

  const snippet = await getAllSnippet();

  return (
    <>
      <Search />
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-10 mx-auto font-sans dark:bg-black'>
        {snippet.map((item) => (
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
    </>
  );
}
