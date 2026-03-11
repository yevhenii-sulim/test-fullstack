'use server';

import {SnippetI} from '@/types/snippet';
import axios from 'axios';

export async function getAllSnippet(): Promise<SnippetI[]> {
  try {
    const {data} = await axios.get('http://localhost:3030/api/snippets');
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
