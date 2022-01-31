export interface ICategory {
  id: number;
  name: string;
  parent: number | null;
  depth: number;
  children?: ICategory[];
}
export type ICategoryOrUndefined = ICategory | undefined;
