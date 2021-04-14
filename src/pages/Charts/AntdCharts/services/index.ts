import request from 'umi-request';

export async function queryAntdChartsBasisLine() {
  return request('/api/charts/antdCharts/lines/basisLine');
}

export async function queryAntdChartsBasisColumn() {
  return request('/api/charts/antdCharts/columns/basisColumn');
}

export async function queryAntdChartsBasisPie() {
  return request('/api/charts/antdCharts/pies/basisPie');
}

export async function queryAntdChartsBasisBar() {
  return request('/api/charts/antdCharts/bars/basisBar');
}

export async function queryAntdChartsBasisRadar() {
  return request('/api/charts/antdCharts/radars/basisRadar');
}

export async function queryAntdChartsBasisWord() {
  return request('/api/charts/antdCharts/words/basisWord');
}
