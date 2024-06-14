export interface Gist {
  id: string;
  description: string;
  files: {
    [key: string]: {
      filename: string;
      type: string;
    };
  };
  forks: string[];
}
