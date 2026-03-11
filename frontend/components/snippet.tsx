import {SnippetI} from '@/types/snippet';

interface Props {
  data: SnippetI;
}

export default function Snippet({data}: Props) {
  return (
    <div>
      <div className='mb-4 flex justify-between gap-3'>
        <h1 className='text-xl font-semibold text-text'>{data.title}</h1>

        <span className='rounded-md bg-blue-500/10 px-2.5 py-1 text-sm font-medium text-blue-600'>
          {data.type}
        </span>
      </div>

      <p className='mb-5 whitespace-pre-wrap text-base leading-7 text-text/80'>
        {data.content}
      </p>

      <div className='flex flex-wrap gap-2'>
        {data.tags.map((tag) => (
          <span
            key={tag}
            className='rounded-lg border border-border px-2.5 py-1 text-sm text-text/70'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
