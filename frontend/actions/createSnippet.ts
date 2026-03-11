'use server';

import {FormState} from '@/types/snippet';
import axios from 'axios';

export async function createSnippet(
  _: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    const title = String(formData.get('title') ?? '');
    const content = String(formData.get('content') ?? '');
    const type = String(formData.get('type') ?? '');
    const tags = formData.getAll('tags') as string[];

    await axios.post('http://localhost:3030/api/snippets', {
      title,
      content,
      type,
      tags,
    });
    return {sent: true, error: null};
  } catch (error) {
    console.error(error);
    return {sent: false, error: 'message send error'};
  }
}
