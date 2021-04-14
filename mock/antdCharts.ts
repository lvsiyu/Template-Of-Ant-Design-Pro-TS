import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const getAntdChartsBasisLine = async (req: Request, res: Response) => {
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

const getAntdChartsBasisColumn = async (req: Request, res: Response) => {
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

const getAntdChartsBasisPie = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    msg: 'success',
  });
};

const getAntdChartsBasisBar = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { year: '1951 年', value: 38 },
      { year: '1952 年', value: 52 },
      { year: '1956 年', value: 61 },
      { year: '1957 年', value: 145 },
      { year: '1958 年', value: 48 },
    ],
    msg: 'success',
  });
};

const getAntdChartsBasisRadar = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { name: 'G2', star: 10178 },
      { name: 'G6', star: 7077 },
      { name: 'F2', star: 7345 },
      { name: 'L7', star: 2029 },
      { name: 'X6', star: 298 },
      { name: 'AVA', star: 806 },
    ],
    msg: 'success',
  });
};

const getAntdChartsBasisWord = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { x: 'China', value: 10, category: 'asia' },
      { x: 'India', value: 9, category: 'asia' },
      { x: 'United States', value: 8, category: 'america' },
      { x: 'Indonesia', value: 7, category: 'asia' },
      { x: 'Brazil', value: 6, category: 'america' },
      { x: 'Pakistan', value: 6, category: 'asia' },
      { x: 'Nigeria', value: 5, category: 'africa' },
      { x: 'Bangladesh', value: 4, category: 'asia' },
      { x: 'Russia', value: 3, category: 'europe' },
    ],
    msg: 'success',
  });
};

export default {
  'GET /api/charts/antdCharts/lines/basisLine': getAntdChartsBasisLine,
  'GET /api/charts/antdCharts/columns/basisColumn': getAntdChartsBasisColumn,
  'GET /api/charts/antdCharts/pies/basisPie': getAntdChartsBasisPie,
  'GET /api/charts/antdCharts/bars/basisBar': getAntdChartsBasisBar,
  'GET /api/charts/antdCharts/radars/basisRadar': getAntdChartsBasisRadar,
  'GET /api/charts/antdCharts/words/basisWord': getAntdChartsBasisWord,
};
