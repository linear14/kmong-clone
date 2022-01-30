export interface IServiceCard {
  serviceIdx: number;
  userIdx: number;
  nickname: string;
  level: number;
  title: string;
  thumbnailUrl?: string;
  leastPrice: number;
  isPackage: boolean;
  rate: number;
  rateCnt: number;
}
