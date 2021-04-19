import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const basisListData = async (req: Request, res: Response) => {
  const basisListDataSource = [];
  for (let i = 0; i < 10; i += 1) {
    basisListDataSource.push({
      title: `标题${i + 1}`,
      avatar:
        'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
    });
  }
  await waitTime(1000);
  res.send({
    code: 200,
    data: basisListDataSource,
    msg: 'success',
  });
};

const detailsListData = async (req: Request, res: Response) => {
  const detailsListDataSource = [];
  for (let i = 0; i < 20; i += 1) {
    detailsListDataSource.push({
      id: i,
      title: `标题${i + 1}`,
      tag: ['我是tag1', '我是tag2', '我是比较长的tag3'],
      content:
        '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
      action: [
        { label: 'star', value: 156 },
        { label: 'great', value: 74 },
        { label: 'message', value: 5 },
      ],
      image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
    });
  }
  await waitTime(1000);
  res.send({
    code: 200,
    data: detailsListDataSource,
    msg: 'success',
  });
};

export default {
  'GET  /api/list/basis': basisListData,
  'GET  /api/list/detail': detailsListData,
};
