import { GistFile } from './gist-file';

export interface Gist {
  id: string;
  description: string;
  files: {
    [key: string]: GistFile;
  };
  forks: string[];
}
