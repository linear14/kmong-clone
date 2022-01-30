import { IServiceCard } from 'src/types/service';

export const getServicesByCategoryIdx = async (categoryIdx: number) => {
  try {
    const option = {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    };
    const res = await fetch(`/api/service?categoryIdx=${categoryIdx}`, option);
    if (res.ok) {
      const result: IServiceCard[] = await res.json();
      return result;
    } else {
      return [];
    }
  } catch (err) {
    return [];
  }
};
