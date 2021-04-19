import request from 'umi-request';
import type { DetailDataResponseType } from '../data/index';

export async function queryDetailList(): Promise<DetailDataResponseType> {
  return request('/api/list/detail');
}
