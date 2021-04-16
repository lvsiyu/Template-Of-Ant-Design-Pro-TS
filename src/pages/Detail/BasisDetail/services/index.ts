import request from 'umi-request';
import type { basisDetailDataResponse } from '../data/index';

export async function queryDetailData(): Promise<basisDetailDataResponse> {
  return request('/api/details/basis');
}
