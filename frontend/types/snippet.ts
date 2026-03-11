export interface SnippetI {
  _id?: string;
  title: string;
  content: string;
  tags: string[];
  type: string;
}
export type FormState = {sent: boolean; error: string | null};
