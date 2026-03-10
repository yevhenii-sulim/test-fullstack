'use server';

import axios from 'axios';

export async function deleteSnippet() {
  await axios.delete('/api/mok/snippet');
}
