import {getAllSnippet} from '@/actions/getAllSnippets';
import Pagination from '@/components/pagination';
import Search from '@/components/search';
import Snippet from '@/components/snippet';
import TagFilter from '@/components/tagFilter';
import {limit} from '@/constants';
import {tags} from '@/constants/tags';
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
  const tagsQuery = Array.isArray(params.tags)
    ? params.tags
    : params.tags
      ? [params.tags]
      : [];

  const {total, items} = await getAllSnippet(search, tagsQuery, page, limit);

  return (
    <>
      <div className='flex gap-5 mb-10 flex-wrap'>
        {tags.map((tag) => (
          <TagFilter key={tag} tag={tag} />
        ))}
      </div>
      <Search />
      <ul className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-10 mx-auto font-sans dark:bg-black'>
        {items.map((item) => (
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
      <Pagination total={total} />
    </>
  );
}
