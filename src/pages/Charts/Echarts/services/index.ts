import request from 'umi-request';

export async function queryEchartsBasisLine() {
  return request('/api/charts/echarts/lines/basisLine');
}
