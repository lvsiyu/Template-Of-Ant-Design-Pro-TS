import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const getEchartsBasisLine = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [150, 230, 224, 218, 135, 147, 260],
    msg: 'success',
  });
};

const getEchartsAreaLine = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    msg: 'success',
  });
};

const getEchartsSmoothLine = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    msg: 'success',
  });
};

const getEchartsStackedAreaLine = async (req: Request, res: Response) => {
  await waitTime(1000);
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
  await waitTime(1000);
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
  await waitTime(1000);
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

const getEchartsBasisBar = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    msg: 'success',
  });
};

const getEchartsBackgroundBar = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [120, 200, 150, 80, 70, 110, 130],
    msg: 'success',
  });
};

const getEchartsInteractiveBar = async (req: Request, res: Response) => {
  await waitTime(1000);
  const str = '点击柱子或者两指在触屏上滑动能够自动缩放';
  const textArr = [];
  const dataArr = [];
  for (let i of str) {
    textArr.push(i);
    dataArr.push(Math.floor(Math.random() * 130 + 90));
  }

  res.send({
    code: 200,
    data: {
      data1: textArr,
      data2: dataArr,
    },
    msg: 'success',
  });
};

const getEchartsRotationLabelBar = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: {
      data1: [320, 332, 301, 334, 390],
      data2: [220, 182, 191, 234, 290],
      data3: [150, 232, 201, 154, 190],
      data4: [98, 77, 101, 99, 40],
    },
    msg: 'success',
  });
};

const getEchartsStackedBar = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: {
      data1: [320, 332, 301, 334, 390, 330, 320],
      data2: [120, 132, 101, 134, 90, 230, 210],
      data3: [220, 182, 191, 234, 290, 330, 310],
      data4: [150, 232, 201, 154, 190, 330, 410],
      data5: [862, 1018, 964, 1026, 1679, 1600, 1570],
      data6: [620, 732, 701, 734, 1090, 1130, 1120],
      data7: [120, 132, 101, 134, 290, 230, 220],
      data8: [60, 72, 71, 74, 190, 130, 110],
      data9: [62, 82, 91, 84, 109, 110, 120],
    },
    msg: 'success',
  });
};

const getEchartsRounderBar = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: {
      data1: [4, 3, 2, 1],
      data2: [4, 3, 2, 1],
    },
    msg: 'success',
  });
};

const getEchartsBasisPie = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { value: 1048, name: '搜索引擎' },
      { value: 735, name: '直接访问' },
      { value: 580, name: '邮件营销' },
      { value: 484, name: '联盟广告' },
      { value: 300, name: '视频广告' },
    ],
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
  'GET /api/charts/echarts/bars/basisBar': getEchartsBasisBar,
  'GET /api/charts/echarts/bars/backgroundBar': getEchartsBackgroundBar,
  'GET /api/charts/echarts/bars/interactiveBar': getEchartsInteractiveBar,
  'GET /api/charts/echarts/bars/rotationLabelBar': getEchartsRotationLabelBar,
  'GET /api/charts/echarts/bars/stackedBar': getEchartsStackedBar,
  'GET /api/charts/echarts/bars/rounderBar': getEchartsRounderBar,
  'GET /api/charts/echarts/bars/basisPie': getEchartsBasisPie,
};
