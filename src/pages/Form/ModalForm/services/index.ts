import request from 'umi-request';
import type { modalFormDataType, modalFormParams, modalFormResponse } from '../data';

export async function queryModalForm(params: modalFormParams): Promise<modalFormResponse> {
  return request('/api/form/modal', { params });
}
export async function createModalForm(params: modalFormDataType): Promise<modalFormResponse> {
  return request('/api/form/modal', { method: 'POST', data: params });
}
export async function uploadModalForm(params: modalFormDataType): Promise<modalFormResponse> {
  return request('/api/form/modal', { method: 'PUT', data: params });
}
export async function deleteModalForm(id: number): Promise<modalFormResponse> {
  return request('/api/form/modal', { method: 'DELETE', data: { id } });
}
export async function queryModalDetail(id: number) {
  return request(`/api/form/modalDetail?id=${id}`);
}
