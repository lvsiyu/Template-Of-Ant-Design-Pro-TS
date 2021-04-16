import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const basicGoods = [
  {
    id: '1234561',
    name: '名称1',
    barcode: '12421432143214321',
    price: '2.00',
    num: '1',
    amount: '2.00',
  },
  {
    id: '1234562',
    name: '名称2',
    barcode: '12421432143214322',
    price: '3.00',
    num: '2',
    amount: '6.00',
  },
  {
    id: '1234563',
    name: '名称3',
    barcode: '12421432143214323',
    price: '7.00',
    num: '4',
    amount: '28.00',
  },
  {
    id: '1234564',
    name: '长一点的名称4',
    barcode: '12421432143214324',
    price: '8.50',
    num: '3',
    amount: '25.50',
  },
];

const basicProgress = [
  {
    key: '1',
    time: '2017-10-01 14:10',
    rate: '状态名称',
    status: 'processing',
    operator: '角色名称',
    cost: '5mins',
  },
  {
    key: '2',
    time: '2017-10-01 14:05',
    rate: '状态名称',
    status: 'success',
    operator: '角色名称',
    cost: '1h',
  },
  {
    key: '3',
    time: '2017-10-01 13:05',
    rate: '状态名称',
    status: 'success',
    operator: '角色名称',
    cost: '5mins',
  },
  {
    key: '4',
    time: '2017-10-01 13:00',
    rate: '状态名称',
    status: 'success',
    operator: '角色名称',
    cost: '1h',
  },
  {
    key: '5',
    time: '2017-10-01 12:00',
    rate: '状态名称',
    status: 'success',
    operator: '角色名称',
    cost: '5mins',
  },
];

const basisDescriptionData1 = {
  text1: '详情内容',
  text2: '详情内容',
  text3: '详情内容',
  text4: '详情内容',
};

const basisDescriptionData2 = {
  text1: '详情内容',
  text2: '详情内容',
  text3: '详情内容',
  text4: '详情内容',
  text5: '详情内容',
};

const basisDetailData = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: { basicGoods, basicProgress, basisDescriptionData1, basisDescriptionData2 },
    msg: 'success',
  });
};

const detailList1 = async (req: Request, res: Response) => {
  const listArr = [];
  for (let i = 0; i < 25; i += 1) {
    listArr.push({
      name: `名称1-${i}`,
      content1: '短一点的内容1',
      content2: '2020-02-05 14:24',
      content3: '长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容',
    });
  }
  await waitTime(1000);
  res.send({
    code: 200,
    data: listArr,
    msg: 'success',
  });
};

const detailList2 = async (req: Request, res: Response) => {
  const listArr = [];
  for (let i = 0; i < 25; i += 1) {
    listArr.push({
      name: `名称2-${i}`,
      content1: '短一点的内容1',
      content2: '2020-02-05 14:24',
      content3: '长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容',
    });
  }
  await waitTime(1000);
  res.send({
    code: 200,
    data: listArr,
    msg: 'success',
  });
};

const detailList3 = async (req: Request, res: Response) => {
  const listArr = [];
  for (let i = 0; i < 25; i += 1) {
    listArr.push({
      name: `名称3-${i}`,
      content1: '短一点的内容1',
      content2: '2020-02-05 14:24',
      content3: '长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容',
    });
  }
  await waitTime(1000);
  res.send({
    code: 200,
    data: listArr,
    msg: 'success',
  });
};

const detailList4 = async (req: Request, res: Response) => {
  const listArr = [];
  for (let i = 0; i < 25; i += 1) {
    listArr.push({
      name: `名称4-${i}`,
      content1: '短一点的内容1',
      content2: '2020-02-05 14:24',
      content3: '长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容长一点的内容',
    });
  }
  await waitTime(1000);
  res.send({
    code: 200,
    data: listArr,
    msg: 'success',
  });
};

export default {
  'GET  /api/details/basis': basisDetailData,
  'GET  /api/details/list1': detailList1,
  'GET  /api/details/list2': detailList2,
  'GET  /api/details/list3': detailList3,
  'GET  /api/details/list4': detailList4,
};
