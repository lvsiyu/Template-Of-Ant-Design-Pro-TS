import request from 'umi-request';

export async function queryEchartsBasisLine() {
  return request('/api/charts/echarts/lines/basisLine');
}

export async function queryEchartsAreaLine() {
  return request('/api/charts/echarts/lines/areaLine');
}

export async function queryEchartsSmoothLine() {
  return request('/api/charts/echarts/lines/smootnLine');
}

export async function queryEchartsStackedAreaLine() {
  return request('/api/charts/echarts/lines/stackedAreaLine');
}

export async function queryEchartsStepLine() {
  return request('/api/charts/echarts/lines/stepLine');
}

export async function queryEchartsTwoValueAxesInPolarLine() {
  return request('/api/charts/echarts/lines/twoValueAxesInPolarLine');
}

export async function queryEchartsBasisBar() {
  return request('/api/charts/echarts/bars/basisBar');
}

export async function queryEchartsBackgroundBar() {
  return request('/api/charts/echarts/bars/backgroundBar');
}

export async function queryEchartsInteractiveBar() {
  return request('/api/charts/echarts/bars/interactiveBar');
}

export async function queryEchartsRotationLabelBar() {
  return request('/api/charts/echarts/bars/rotationLabelBar');
}

export async function queryEchartsStackedBar() {
  return request('/api/charts/echarts/bars/stackedBar');
}

export async function queryEchartsRounderBar() {
  return request('/api/charts/echarts/bars/rounderBar');
}
