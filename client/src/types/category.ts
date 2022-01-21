export interface ICategory {
  id: number;
  name: string;
  parent: number | null;
  depth: number;
  children?: ICategory[];
}

export interface ICategoryState {
  state: {
    loading: boolean;
    error: boolean;
  };
  categories: ICategory[];
}
