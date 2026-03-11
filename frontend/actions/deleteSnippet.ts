'use server';

import axios from 'axios';
import {redirect} from 'next/navigation';

export async function deleteSnippet(id: string) {
  try {
    await axios.delete(`http://localhost:3030/api/snippets/${id}`);
  } catch (error) {
    console.error(error);
  }
  redirect('/');
}
