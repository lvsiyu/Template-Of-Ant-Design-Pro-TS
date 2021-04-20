import request from 'umi-request';
import type { EditTableDataParams, EditTableDataResponse, DataSourceType } from '../data';

export async function queryBasisTable(params: EditTableDataParams): Promise<EditTableDataResponse> {
  return request('/api/table/EditTableData', { params });
}

export async function createBasisTable(params: DataSourceType): Promise<EditTableDataResponse> {
  return request('/api/table/EditTableData', { method: 'POST', data: { ...params } });
}
