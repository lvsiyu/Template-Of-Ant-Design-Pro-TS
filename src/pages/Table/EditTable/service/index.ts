import request from 'umi-request';
import type { EditTableDataParams, EditTableDataResponse, DataSourceType } from '../data';

export async function queryBasisTable(params: EditTableDataParams): Promise<EditTableDataResponse> {
  return request('/api/table/EditTableData', { params });
}

export async function createBasisTable(params: DataSourceType): Promise<EditTableDataResponse> {
  return request('/api/table/EditTableData', { method: 'POST', data: { ...params } });
}

export async function uploadBasisTable(params: DataSourceType): Promise<EditTableDataResponse> {
  return request('/api/table/EditTableData', { method: 'PUT', data: { ...params } });
}

export async function deleteBasisTable(id: number): Promise<EditTableDataResponse> {
  return request('/api/table/EditTableData', { method: 'DELETE', data: { id } });
}
