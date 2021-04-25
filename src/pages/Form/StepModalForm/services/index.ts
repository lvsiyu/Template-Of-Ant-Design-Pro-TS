import request from 'umi-request';
import type { StepFormDataType, StepFormResponse } from '../data';

export async function stepForm(params: StepFormDataType): Promise<StepFormResponse> {
  return request('/api/form/step', { method: 'POST', data: params });
}
