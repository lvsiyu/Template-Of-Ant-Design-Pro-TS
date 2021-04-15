import request from 'umi-request';
import type { BasisTableDataParams } from '../data';

export async function queryBasisTable(params: BasisTableDataParams) {
  return request('/api/table/BasisTableData', {
    params,
  });
}

export async function queryBasisTableInner() {
  return request('/api/table/BasisTableInnerData');
}
