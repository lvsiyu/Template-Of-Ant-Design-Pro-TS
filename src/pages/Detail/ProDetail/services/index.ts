import request from 'umi-request';

export async function queryProDetailTitle() {
  return request('/api/details/pro/proDetailTitle');
}

export async function queryProDetailTab1() {
  return request('/api/details/pro/proDetailTab1');
}

export async function queryProDetailTab2() {
  return request('/api/details/pro/proDetailTab2');
}

export async function queryProDetailList1() {
  return request('/api/details/pro/list1');
}

export async function queryProDetailList2() {
  return request('/api/details/pro/list2');
}

export async function queryProDetailList3() {
  return request('/api/details/pro/list3');
}

export async function queryProDetailList4() {
  return request('/api/details/pro/list4');
}
