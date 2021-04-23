import request from 'umi-request';
import type { basisFormDataType, basisFormRespionse } from '../data/index';

export async function queryBasisForm(): Promise<basisFormRespionse> {
  return request('/api/form/basis');
}
export async function uploadBasisForm(params: basisFormDataType): Promise<basisFormRespionse> {
  return request('/api/form/basis', { method: 'POST', data: params });
}
