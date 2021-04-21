import request from 'umi-request';
import type { IPListItemParams, IPListItemResponse } from '../data';

export async function queryTabTable(params: IPListItemParams): Promise<IPListItemResponse> {
  return request('/api/table/TabTableData', { params });
}
