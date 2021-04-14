import request from 'umi-request';

export async function queryBizChartsBasisLine() {
  return request('/api/charts/bizCharts/lines/basisLine');
}

export async function queryBizChartsBasisColumn() {
  return request('/api/charts/bizCharts/columns/basisColumn');
}

export async function queryBizChartsBasisPie() {
  return request('/api/charts/bizCharts/pies/basisPie');
}
