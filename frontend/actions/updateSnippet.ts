'use server';

import axios from 'axios';

export type FormState = {sent: boolean; error: string | null};

export async function updateSnippet(
  _: FormState,
  formData: FormData,
  id?: string
): Promise<FormState> {
  try {
    const title = String(formData.get('title') ?? '');
    const content = String(formData.get('content') ?? '');
    const type = String(formData.get('type') ?? '');
    const tags = formData.getAll('tags') as string[];

    await axios.patch(`http://localhost:3030/api/snippets/${id}`, {
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
