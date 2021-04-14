import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const getBizChartsBasisLine = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
    ],
    msg: 'success',
  });
};

const getBizChartsBasisColumn = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { type: '家具家电', sales: 38 },
      { type: '粮油副食', sales: 52 },
      { type: '生鲜水果', sales: 61 },
      { type: '美容洗护', sales: 145 },
      { type: '母婴用品', sales: 48 },
      { type: '进口食品', sales: 38 },
      { type: '食品饮料', sales: 38 },
      { type: '家庭清洁', sales: 38 },
    ],
    msg: 'success',
  });
};

const getBizChartsBasisPie = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其它', value: 5 },
    ],
    msg: 'success',
  });
};

const getBizChartsBasisBar = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { 地区: '华东', 销售额: 4684506.442 },
      { 地区: '中南', 销售额: 4137415.0929999948 },
      { 地区: '东北', 销售额: 2681567.469000001 },
      { 地区: '华北', 销售额: 2447301.017000004 },
      { 地区: '西南', 销售额: 1303124.508000002 },
      { 地区: '西北', 销售额: 815039.5959999998 },
    ],
    msg: 'success',
  });
};

const getBizChartsBasisRadar = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { item: 'Design', user: 'a', score: 70 },
      { item: 'Design', user: 'b', score: 30 },
      { item: 'Development', user: 'a', score: 60 },
      { item: 'Development', user: 'b', score: 70 },
      { item: 'Marketing', user: 'a', score: 60 },
      { item: 'Marketing', user: 'b', score: 50 },
      { item: 'Users', user: 'a', score: 40 },
      { item: 'Users', user: 'b', score: 50 },
      { item: 'Test', user: 'a', score: 60 },
      { item: 'Test', user: 'b', score: 70 },
      { item: 'Language', user: 'a', score: 70 },
      { item: 'Language', user: 'b', score: 50 },
      { item: 'Technology', user: 'a', score: 50 },
      { item: 'Technology', user: 'b', score: 40 },
      { item: 'Support', user: 'a', score: 30 },
      { item: 'Support', user: 'b', score: 40 },
      { item: 'Sales', user: 'a', score: 60 },
      { item: 'Sales', user: 'b', score: 40 },
      { item: 'UX', user: 'a', score: 50 },
      { item: 'UX', user: 'b', score: 60 },
    ],
    msg: 'success',
  });
};

const getBizChartsBasisWord = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { value: 12, name: 'G2Plot' },
      { value: 9, name: 'AntV' },
      { value: 8, name: 'F2' },
      { value: 8, name: 'G2' },
      { value: 8, name: 'G6' },
      { value: 8, name: 'DataSet' },
      { value: 6, name: 'Analysis' },
      { value: 6, name: 'Data Mining' },
      { value: 6, name: 'Data Vis' },
      { value: 6, name: 'Design' },
      { value: 6, name: 'Grammar' },
      { value: 6, name: 'Graphics' },
      { value: 6, name: 'Graph' },
      { value: 6, name: 'Hierarchy' },
      { value: 6, name: 'Labeling' },
      { value: 6, name: 'Layout' },
      { value: 6, name: 'Quantitative' },
      { value: 6, name: 'Relation' },
      { value: 4, name: 'Arc Diagram' },
      { value: 4, name: 'Bar Chart' },
      { value: 4, name: 'Canvas' },
      { value: 4, name: 'Chart' },
      { value: 4, name: 'DAG' },
      { value: 4, name: 'DG' },
      { value: 4, name: 'Facet' },
      { value: 4, name: 'Geo' },
    ],
    msg: 'success',
  });
};

export default {
  'GET /api/charts/bizCharts/lines/basisLine': getBizChartsBasisLine,
  'GET /api/charts/bizCharts/columns/basisColumn': getBizChartsBasisColumn,
  'GET /api/charts/bizCharts/pies/basisPie': getBizChartsBasisPie,
  'GET /api/charts/bizCharts/bars/basisBar': getBizChartsBasisBar,
  'GET /api/charts/bizCharts/radars/basisRadar': getBizChartsBasisRadar,
  'GET /api/charts/bizCharts/word/basisWord': getBizChartsBasisWord,
};
