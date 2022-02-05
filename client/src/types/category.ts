export interface ICategory {
  id: number;
  name: string;
  parent: number | null;
  depth: number;
  children?: ICategory[];
}
export type ICategoryOrUndefined = ICategory | undefined;

export interface ICategoryWithUrl {
  name: string;
  url: string;
}
