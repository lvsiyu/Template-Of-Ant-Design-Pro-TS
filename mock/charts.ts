import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const getEchartsBasisLine = async (req: Request, res: Response) => {
  await waitTime(2000);
  res.send({
    code: 200,
    data: [150, 230, 224, 218, 135, 147, 260],
    msg: 'success',
  });
};

const getEchartsAreaLine = async (req: Request, res: Response) => {
  await waitTime(2000);
  res.send({
    code: 200,
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    msg: 'success',
  });
};

const getEchartsSmoothLine = async (req: Request, res: Response) => {
  await waitTime(2000);
  res.send({
    code: 200,
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    msg: 'success',
  });
};

const getEchartsStackedAreaLine = async (req: Request, res: Response) => {
  await waitTime(2000);
  res.send({
    code: 200,
    data: {
      data1: [120, 132, 101, 134, 90, 230, 210],
      data2: [220, 182, 191, 234, 290, 330, 310],
      data3: [150, 232, 201, 154, 190, 330, 410],
      data4: [320, 332, 301, 334, 390, 330, 320],
      data5: [820, 932, 901, 934, 1290, 1330, 1320],
    },
    msg: 'success',
  });
};

const getEchartsStepLine = async (req: Request, res: Response) => {
  await waitTime(2000);
  res.send({
    code: 200,
    data: {
      data1: [120, 132, 101, 134, 90, 230, 210],
      data2: [220, 282, 201, 234, 290, 430, 410],
      data3: [450, 432, 401, 454, 590, 530, 510],
    },
    msg: 'success',
  });
};

const getEchartsTwoValueAxesInPolarLine = async (req: Request, res: Response) => {
  await waitTime(2000);
  const data: number[][] = [];

  for (let i = 0; i <= 360; i += 1) {
    const t = (i / 180) * Math.PI;
    const r = Math.sin(2 * t) * Math.cos(2 * t);
    data.push([r, i]);
  }
  res.send({
    code: 200,
    data,
    msg: 'success',
  });
};

export default {
  'GET /api/charts/echarts/lines/basisLine': getEchartsBasisLine,
  'GET /api/charts/echarts/lines/areaLine': getEchartsAreaLine,
  'GET /api/charts/echarts/lines/smootnLine': getEchartsSmoothLine,
  'GET /api/charts/echarts/lines/stackedAreaLine': getEchartsStackedAreaLine,
  'GET /api/charts/echarts/lines/stepLine': getEchartsStepLine,
  'GET /api/charts/echarts/lines/twoValueAxesInPolarLine': getEchartsTwoValueAxesInPolarLine,
};
