'use server';

import {SnippetI} from '@/types/snippet';
import axios from 'axios';
import qs from 'qs';

export async function getAllSnippet(
  search?: string,
  tags?: string[],
  page?: number,
  limit?: number
): Promise<{total: number; items: SnippetI[]}> {
  try {
    const {data} = await axios.get(`http://localhost:3030/api/snippets`, {
      params: {search, page, limit, tags},
      paramsSerializer: (params) =>
        qs.stringify(params, {arrayFormat: 'repeat'}),
    });
    return data;
  } catch (error) {
    console.error(error);
    return {total: 0, items: []};
  }
}
