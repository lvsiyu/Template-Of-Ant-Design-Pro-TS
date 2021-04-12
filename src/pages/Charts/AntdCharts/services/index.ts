import request from 'umi-request';

export async function queryAntdChartsBasisLine() {
  return request('/api/charts/antdCharts/lines/basisLine');
}
