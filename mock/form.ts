import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const basisForm = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: {
      text1: '从接口获取的默认字段',
    },
    msg: 'success',
  });
};

export default {
  'GET  /api/form/basis': basisForm,
  'POST  /api/form/basis': basisForm,
};
