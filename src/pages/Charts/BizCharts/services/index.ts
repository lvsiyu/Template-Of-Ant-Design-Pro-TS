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

export async function queryBizChartsBasisBar() {
  return request('/api/charts/bizCharts/bars/basisBar');
}

export async function queryBizChartsBasisRadar() {
  return request('/api/charts/bizCharts/radars/basisRadar');
}

export async function queryBizChartsBasisWord() {
  return request('/api/charts/bizCharts/word/basisWord');
}
