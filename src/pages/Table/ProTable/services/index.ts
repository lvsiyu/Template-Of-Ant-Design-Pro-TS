import request from 'umi-request';
import type { ProTableDataParams } from '../data';

export async function queryBasisTable(params: ProTableDataParams) {
  return request('/api/table/ProTableData', {
    params,
  });
}
