import request from 'umi-request';
import type { stepModalFormDataType, stepModalFormParams, stepmModalFormResponse } from '../data';

export async function queryStepModalFormList(
  params: stepModalFormParams,
): Promise<stepmModalFormResponse> {
  return request('/api/form/stepModalList', { params });
}
export async function createStepModalFormList(
  params: stepModalFormDataType,
): Promise<stepmModalFormResponse> {
  return request('/api/form/stepModalList', { method: 'POST', data: params });
}
export async function uploadStepModalFormList(
  params: stepModalFormDataType,
): Promise<stepmModalFormResponse> {
  return request('/api/form/stepModalList', { method: 'PUT', data: params });
}
export async function deleteStepModalFormList(id: number): Promise<stepmModalFormResponse> {
  return request('/api/form/stepModalList', { method: 'DELETE', data: { id } });
}
export async function queryStepModalDetail(id: number) {
  return request(`/api/form/stepModalDetail?id=${id}`);
}
