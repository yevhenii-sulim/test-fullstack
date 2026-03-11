'use server';

import {SnippetI} from '@/types/snippet';
import axios from 'axios';

export async function getAllSnippet(
  search?: string,
  limit?: string,
  page?: string
): Promise<SnippetI[]> {
  try {
    const {data} = await axios.get(`http://localhost:3030/api/snippets`, {
      params: {search, page, limit},
    });
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
