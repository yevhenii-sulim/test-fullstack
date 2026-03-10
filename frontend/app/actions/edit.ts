'use server';

import axios from 'axios';

export type FormState = {sent: boolean; error: string | null};

export async function increment(
  _: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    await axios.post('/api/mok/snippet', formData);
    return {sent: true, error: null};
  } catch (error) {
    console.error(error);
    return {sent: false, error: 'message send error'};
  }
}
