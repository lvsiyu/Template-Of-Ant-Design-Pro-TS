import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const valueEnumMark = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
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

const modalFormList = [
  {
    id: 0,
    name: '基础名称1',
    description: '我是简短一点的描述',
    dateTime: '2020-10-15 20:53:24',
    progress: Math.ceil(Math.random() * 100) + 1,
    status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
  },
  {
    id: 1,
    name: '基础名称2',
    description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
    dateTime: '2020-10-15 20:53:24',
    progress: Math.ceil(Math.random() * 100) + 1,
    status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
  },
];

const getModalFormData = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: modalFormList,
    msg: 'success',
  });
};

const createModalFormData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const newList = req.body;
  newList.id = modalFormList.length;
  modalFormList.push(newList);
  res.send({
    code: 200,
    data: modalFormList,
    msg: 'success',
  });
};

const uploadModalFormData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const { id } = req.body;
  const uploadDatas = req.body;
  for (let i = 0; i < modalFormList.length; i += 1) {
    if (modalFormList[i].id === id) {
      modalFormList[i] = uploadDatas;
      break;
    }
  }
  res.send({
    code: 200,
    data: uploadDatas,
    msg: 'success',
  });
};

const deleteModalFormData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const { id } = req.body;
  for (let i = 0; i < modalFormList.length; i += 1) {
    if (modalFormList[i].id === id) {
      modalFormList.splice(i, 1);
      break;
    }
  }
  res.send({
    code: 200,
    data: modalFormList,
    msg: 'success',
  });
};

const getModalFormDetail = async (req: Request, res: Response) => {
  await waitTime(1000);
  let { id } = req.query;
  let modalDetail = {};
  for (let i = 0; i < modalFormList.length; i += 1) {
    if (modalFormList[i].id === Number(id)) {
      modalDetail = modalFormList[i];
      break;
    }
  }
  res.send({
    code: 200,
    data: modalDetail,
    msg: 'success',
  });
};

const stepFormData = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    msg: 'success',
  });
};

const stepModalFormList = [
  {
    id: 0,
    name: '基础名称1',
    description: '我是简短一点的描述',
    dateTime: '2020-10-15 20:53:24',
    progress: Math.ceil(Math.random() * 100) + 1,
    status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
  },
  {
    id: 1,
    name: '基础名称2',
    description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
    dateTime: '2020-10-15 20:53:24',
    progress: Math.ceil(Math.random() * 100) + 1,
    status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
  },
];

const queryStepModalFormList = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: stepModalFormList,
    msg: 'success',
  });
};

const createStepModalFormList = async (req: Request, res: Response) => {
  const getValues = req.body;
  const { type, ...newList } = getValues;

  if (type === 'finish') {
    newList.id = stepModalFormList.length;
    stepModalFormList.push(newList);
  }

  await waitTime(1000);
  res.send({
    code: 200,
    data: stepModalFormList,
    msg: 'success',
  });
};

const uploadStepModalFormList = async (req: Request, res: Response) => {
  const { id } = req.body;
  const uploadDatas = req.body;
  for (let i = 0; i < stepModalFormList.length; i += 1) {
    if (stepModalFormList[i].id === id) {
      stepModalFormList[i] = uploadDatas;
      break;
    }
  }
  await waitTime(1000);
  res.send({
    code: 200,
    data: stepModalFormList,
    msg: 'success',
  });
};

const deleteStepModalFormData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const { id } = req.body;
  for (let i = 0; i < stepModalFormList.length; i += 1) {
    if (stepModalFormList[i].id === id) {
      stepModalFormList.splice(i, 1);
      break;
    }
  }
  res.send({
    code: 200,
    data: stepModalFormList,
    msg: 'success',
  });
};

const getStepModalFormDetail = async (req: Request, res: Response) => {
  await waitTime(1000);
  let { id } = req.query;
  let modalDetail = {};
  for (let i = 0; i < stepModalFormList.length; i += 1) {
    if (stepModalFormList[i].id === Number(id)) {
      modalDetail = stepModalFormList[i];
      break;
    }
  }
  res.send({
    code: 200,
    data: modalDetail,
    msg: 'success',
  });
};

export default {
  'GET  /api/form/basis': basisForm,
  'POST  /api/form/basis': basisForm,
  'GET  /api/form/modal': getModalFormData,
  'POST  /api/form/modal': createModalFormData,
  'PUT  /api/form/modal': uploadModalFormData,
  'DELETE  /api/form/modal': deleteModalFormData,
  'GET  /api/form/modalDetail': getModalFormDetail,
  'POST  /api/form/step': stepFormData,
  'GET  /api/form/stepModalList': queryStepModalFormList,
  'POST  /api/form/stepModalList': createStepModalFormList,
  'PUT  /api/form/stepModalList': uploadStepModalFormList,
  'DELETE  /api/form/stepModalList': deleteStepModalFormData,
  'GET  /api/form/stepModalDetail': getStepModalFormDetail,
};
