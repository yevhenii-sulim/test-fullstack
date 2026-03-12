'use client';
import ReactPaginate from 'react-paginate';
import {useRouter, useSearchParams} from 'next/navigation';
import {JSX, useState} from 'react';
import {limit} from '@/constants';

interface Props {
  total: number;
}

export default function Pagination({total}: Props): JSX.Element {
  const params = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(1);

  const query = new URLSearchParams(params.toString());
  const buttonStyle =
    'transition duration-250 hover:bg-color hover:text-text-button w-10 h-10  text-color rounded-[50%] bg-active flex justify-center items-center cursor-pointer';

  const handlePageClick = (event: {selected: number}) => {
    setPage(event.selected + 1);
    query.set('page', String(event.selected + 1));
    if (limit !== 10) {
      query.set('limit', String(limit));
    }

    router.push(`?${query.toString()}`);
  };

  const paginationPages = Math.max(1, Math.ceil((total ?? 0) / limit));

  return (
    <ReactPaginate
      forcePage={page - 1}
      breakLabel='...'
      nextLabel='>'
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={paginationPages}
      previousLabel='<'
      renderOnZeroPageCount={null}
      className='flex gap-3 my-10 w-full justify-center items-center'
      pageLinkClassName={buttonStyle}
      pageClassName='rounded-full overflow-hidden'
      activeLinkClassName='bg-color text-text-button'
      previousLinkClassName={buttonStyle}
      nextLinkClassName={buttonStyle}
    />
  );
}
