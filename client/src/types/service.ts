export interface IServiceCard {
  serviceIdx: number;
  nickname: string;
  level: number;
  title: string;
  thumbnailUrl?: string;
  isLike: boolean;
  price: number; // 최소 금액
  itemCnt: number; // 세부 항목이 몇 개 있는지 (2개 이상이면 금액 표기방법 다르게)
  rate: number;
  rateCnt: number;
}
