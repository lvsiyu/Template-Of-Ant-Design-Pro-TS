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
    msg: '查询成功',
  });
};

export default {
  'GET /api/charts/echarts/lines/basisLine': getEchartsBasisLine,
};
