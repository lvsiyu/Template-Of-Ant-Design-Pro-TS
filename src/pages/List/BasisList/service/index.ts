import request from 'umi-request';
import type { BasisListDataResponse } from '../data/index';

export async function queryBasisList(): Promise<BasisListDataResponse> {
  return request('/api/list/basis');
}
