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

export default {
  'GET /api/charts/bizCharts/lines/basisLine': getBizChartsBasisLine,
  'GET /api/charts/bizCharts/columns/basisColumn': getBizChartsBasisColumn,
  'GET /api/charts/bizCharts/pies/basisPie': getBizChartsBasisPie,
  'GET /api/charts/bizCharts/bars/basisBar': getBizChartsBasisBar,
};
