import {SnippetI} from '@/types/snippet';
import axios from 'axios';

export async function getSnippet(id: string): Promise<SnippetI> {
  try {
    const {data} = await axios.get(`http://localhost:3030/api/snippets/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return {title: '', content: '', tags: [], type: ''};
  }
}
