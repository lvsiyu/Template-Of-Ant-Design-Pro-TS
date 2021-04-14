import request from 'umi-request';

export async function queryBizChartsBasisLine() {
  return request('/api/charts/bizCharts/lines/basisLine');
}
