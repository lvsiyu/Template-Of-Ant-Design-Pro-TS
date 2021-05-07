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

const getEchartsRingPie = async (req: Request, res: Response) => {
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

const getEchartsTexturePie = async (req: Request, res: Response) => {
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

const getEchartsRosePie = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { value: 40, name: 'rose 1' },
      { value: 38, name: 'rose 2' },
      { value: 32, name: 'rose 3' },
      { value: 30, name: 'rose 4' },
      { value: 28, name: 'rose 5' },
      { value: 26, name: 'rose 6' },
      { value: 22, name: 'rose 7' },
      { value: 18, name: 'rose 8' },
    ],
    msg: 'success',
  });
};

const getEchartsSpeicalLabelPie = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { value: 1548, name: '幽州' },
      { value: 735, name: '荆州' },
      { value: 510, name: '兖州' },
      { value: 434, name: '益州' },
      { value: 335, name: '西凉' },
    ],
    msg: 'success',
  });
};

const getEchartsNestedPie = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      { value: 1048, name: '百度' },
      { value: 335, name: '直达' },
      { value: 310, name: '邮件营销' },
      { value: 251, name: '谷歌' },
      { value: 234, name: '联盟广告' },
      { value: 147, name: '必应' },
      { value: 135, name: '视频广告' },
      { value: 102, name: '其他' },
    ],
    msg: 'success',
  });
};

const getEchartsBasisScatter = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      [10.0, 8.04],
      [8.07, 6.95],
      [13.0, 7.58],
      [9.05, 8.81],
      [11.0, 8.33],
      [14.0, 7.66],
      [13.4, 6.81],
      [10.0, 6.33],
      [14.0, 8.96],
      [12.5, 6.82],
      [9.15, 7.2],
      [11.5, 7.2],
      [3.03, 4.23],
      [12.2, 7.83],
      [2.02, 4.47],
      [1.05, 3.33],
      [4.05, 4.96],
      [6.03, 7.24],
      [12.0, 6.26],
      [12.0, 8.84],
      [7.08, 5.82],
      [5.02, 5.68],
    ],
    msg: 'success',
  });
};

const getEchartsAnimateScatter = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      [161.2, 51.6],
      [167.5, 59.0],
      [159.5, 49.2],
      [157.0, 63.0],
      [155.8, 53.6],
      [170.0, 59.0],
      [159.1, 47.6],
      [166.0, 69.8],
      [176.2, 66.8],
      [160.2, 75.2],
      [172.5, 55.2],
      [170.9, 54.2],
      [172.9, 62.5],
      [153.4, 42.0],
      [160.0, 50.0],
      [147.2, 49.8],
      [168.2, 49.2],
      [175.0, 73.2],
      [157.0, 47.8],
      [167.6, 68.8],
      [159.5, 50.6],
      [175.0, 82.5],
      [166.8, 57.2],
      [176.5, 87.8],
      [170.2, 72.8],
      [174.0, 54.5],
      [173.0, 59.8],
      [179.9, 67.3],
      [170.5, 67.8],
      [160.0, 47.0],
      [154.4, 46.2],
      [162.0, 55.0],
      [176.5, 83.0],
      [160.0, 54.4],
      [152.0, 45.8],
      [162.1, 53.6],
      [170.0, 73.2],
      [160.2, 52.1],
      [161.3, 67.9],
      [166.4, 56.6],
      [168.9, 62.3],
      [163.8, 58.5],
      [167.6, 54.5],
      [160.0, 50.2],
      [161.3, 60.3],
      [167.6, 58.3],
      [165.1, 56.2],
      [160.0, 50.2],
      [170.0, 72.9],
      [157.5, 59.8],
      [167.6, 61.0],
      [160.7, 69.1],
      [163.2, 55.9],
      [152.4, 46.5],
      [157.5, 54.3],
      [168.3, 54.8],
      [180.3, 60.7],
      [165.5, 60.0],
      [165.0, 62.0],
      [164.5, 60.3],
      [156.0, 52.7],
      [160.0, 74.3],
      [163.0, 62.0],
      [165.7, 73.1],
      [161.0, 80.0],
      [162.0, 54.7],
      [166.0, 53.2],
      [174.0, 75.7],
      [172.7, 61.1],
      [167.6, 55.7],
      [151.1, 48.7],
      [164.5, 52.3],
      [163.5, 50.0],
      [152.0, 59.3],
      [169.0, 62.5],
      [164.0, 55.7],
      [161.2, 54.8],
      [155.0, 45.9],
      [170.0, 70.6],
      [176.2, 67.2],
      [170.0, 69.4],
      [162.5, 58.2],
      [170.3, 64.8],
      [164.1, 71.6],
      [169.5, 52.8],
      [163.2, 59.8],
      [154.5, 49.0],
      [159.8, 50.0],
      [173.2, 69.2],
      [170.0, 55.9],
      [161.4, 63.4],
      [169.0, 58.2],
      [166.2, 58.6],
      [159.4, 45.7],
      [162.5, 52.2],
      [159.0, 48.6],
      [162.8, 57.8],
      [159.0, 55.6],
      [179.8, 66.8],
      [162.9, 59.4],
      [161.0, 53.6],
      [151.1, 73.2],
      [168.2, 53.4],
      [168.9, 69.0],
      [173.2, 58.4],
      [171.8, 56.2],
      [178.0, 70.6],
      [164.3, 59.8],
      [163.0, 72.0],
      [168.5, 65.2],
      [166.8, 56.6],
      [172.7, 105.2],
      [163.5, 51.8],
      [169.4, 63.4],
      [167.8, 59.0],
      [159.5, 47.6],
      [167.6, 63.0],
      [161.2, 55.2],
      [160.0, 45.0],
      [163.2, 54.0],
      [162.2, 50.2],
      [161.3, 60.2],
      [149.5, 44.8],
      [157.5, 58.8],
      [163.2, 56.4],
      [172.7, 62.0],
      [155.0, 49.2],
      [156.5, 67.2],
      [164.0, 53.8],
      [160.9, 54.4],
      [162.8, 58.0],
      [167.0, 59.8],
      [160.0, 54.8],
      [160.0, 43.2],
      [168.9, 60.5],
      [158.2, 46.4],
      [156.0, 64.4],
      [160.0, 48.8],
      [167.1, 62.2],
      [158.0, 55.5],
      [167.6, 57.8],
      [156.0, 54.6],
      [162.1, 59.2],
      [173.4, 52.7],
      [159.8, 53.2],
      [170.5, 64.5],
      [159.2, 51.8],
      [157.5, 56.0],
      [161.3, 63.6],
      [162.6, 63.2],
      [160.0, 59.5],
      [168.9, 56.8],
      [165.1, 64.1],
      [162.6, 50.0],
      [165.1, 72.3],
      [166.4, 55.0],
      [160.0, 55.9],
      [152.4, 60.4],
      [170.2, 69.1],
      [162.6, 84.5],
      [170.2, 55.9],
      [158.8, 55.5],
      [172.7, 69.5],
      [167.6, 76.4],
      [162.6, 61.4],
      [167.6, 65.9],
      [156.2, 58.6],
      [175.2, 66.8],
      [172.1, 56.6],
      [162.6, 58.6],
      [160.0, 55.9],
      [165.1, 59.1],
      [182.9, 81.8],
      [166.4, 70.7],
      [165.1, 56.8],
      [177.8, 60.0],
      [165.1, 58.2],
      [175.3, 72.7],
      [154.9, 54.1],
      [158.8, 49.1],
      [172.7, 75.9],
      [168.9, 55.0],
      [161.3, 57.3],
      [167.6, 55.0],
      [165.1, 65.5],
      [175.3, 65.5],
      [157.5, 48.6],
      [163.8, 58.6],
      [167.6, 63.6],
      [165.1, 55.2],
      [165.1, 62.7],
      [168.9, 56.6],
      [162.6, 53.9],
      [164.5, 63.2],
      [176.5, 73.6],
      [168.9, 62.0],
      [175.3, 63.6],
      [159.4, 53.2],
      [160.0, 53.4],
      [170.2, 55.0],
      [162.6, 70.5],
      [167.6, 54.5],
      [162.6, 54.5],
      [160.7, 55.9],
      [160.0, 59.0],
      [157.5, 63.6],
      [162.6, 54.5],
      [152.4, 47.3],
      [170.2, 67.7],
      [165.1, 80.9],
      [172.7, 70.5],
      [165.1, 60.9],
      [170.2, 63.6],
      [170.2, 54.5],
      [170.2, 59.1],
      [161.3, 70.5],
      [167.6, 52.7],
      [167.6, 62.7],
      [165.1, 86.3],
      [162.6, 66.4],
      [152.4, 67.3],
      [168.9, 63.0],
      [170.2, 73.6],
      [175.2, 62.3],
      [175.2, 57.7],
      [160.0, 55.4],
      [165.1, 104.1],
      [174.0, 55.5],
      [170.2, 77.3],
      [160.0, 80.5],
      [167.6, 64.5],
      [167.6, 72.3],
      [167.6, 61.4],
      [154.9, 58.2],
      [162.6, 81.8],
      [175.3, 63.6],
      [171.4, 53.4],
      [157.5, 54.5],
      [165.1, 53.6],
      [160.0, 60.0],
      [174.0, 73.6],
      [162.6, 61.4],
      [174.0, 55.5],
      [162.6, 63.6],
      [161.3, 60.9],
      [156.2, 60.0],
      [149.9, 46.8],
      [169.5, 57.3],
      [160.0, 64.1],
      [175.3, 63.6],
      [169.5, 67.3],
      [160.0, 75.5],
      [172.7, 68.2],
      [162.6, 61.4],
      [157.5, 76.8],
      [176.5, 71.8],
      [164.4, 55.5],
      [160.7, 48.6],
      [174.0, 66.4],
      [163.8, 67.3],
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
  'GET /api/charts/echarts/pies/basisPie': getEchartsBasisPie,
  'GET /api/charts/echarts/pies/ringPie': getEchartsRingPie,
  'GET /api/charts/echarts/pies/texturePie': getEchartsTexturePie,
  'GET /api/charts/echarts/pies/rosePie': getEchartsRosePie,
  'GET /api/charts/echarts/pies/speicalLabelPie': getEchartsSpeicalLabelPie,
  'GET /api/charts/echarts/pies/nestedPie': getEchartsNestedPie,
  'GET /api/charts/echarts/pies/basisScatter': getEchartsBasisScatter,
  'GET /api/charts/echarts/pies/animateScatter': getEchartsAnimateScatter,
};
