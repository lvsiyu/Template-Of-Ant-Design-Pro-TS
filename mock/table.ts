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

/* const valueEnumArr = ['success', 'error', 'processing', 'default']; */

const BasisTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: [
      {
        id: '1',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '2',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '3',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '4',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '5',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '6',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '7',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '8',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '9',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '10',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '11',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '12',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '13',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '14',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '15',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '16',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '17',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '18',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '19',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '20',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '21',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '22',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '23',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '24',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '25',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '26',
        name: '基础名称',
        description: '我是很长的一段描述很长很长的一段描述很长很长的一段描述很长很长的一段描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
      {
        id: '27',
        name: '基础名称',
        description: '我是简短一点的描述',
        date: '2020-10-15',
        time: '20:53:24',
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnumMark[Math.floor(Math.random() * 10) % 4],
      },
    ],
    msg: 'success',
  });
};

const BasisTableInnerData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    data.push({
      id: i,
      name:
        '我是名称我是名称我是名称我是名称我是名称我是名称我是名称我是名称我是名称我是名称我是名称',
      description:
        '我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    });
  }
  res.send({
    code: 200,
    data,
    msg: 'success',
  });
};

const EditTableData = [
  {
    id: 624748504,
    title: '活动名称一',
    labels: [{ key: 'tag1', label: 'tag1' }],
    state: 'open',
    created_at: '2020-05-26T09:42:56Z',
  },
  {
    id: 624691229,
    title: '活动名称二',
    labels: [{ key: 'tag1', label: 'tag1' }],
    state: 'closed',
    created_at: '2020-05-26T08:19:22Z',
  },
];

const GetEditTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  res.send({
    code: 200,
    data: EditTableData,
    msg: 'success',
  });
};

const CreateEditTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const { title, state, labels } = req.body;
  const createData = {
    id: new Date().getTime(),
    title,
    labels,
    state,
    created_at: new Date().toJSON(),
  };

  EditTableData.push(createData);
  res.send({
    code: 200,
    data: EditTableData,
    msg: 'success',
  });
};

const UploadEditTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const { title, state, labels, index } = req.body;
  const uploadData = {
    id: new Date().getTime(),
    title,
    labels,
    state,
    created_at: new Date().toJSON(),
  };

  EditTableData[index] = uploadData;
  res.send({
    code: 200,
    data: EditTableData,
    msg: 'success',
  });
};

const DeleteEditTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const { id } = req.body;
  for (let i = 0; i < EditTableData.length; i += 1) {
    if (EditTableData[i].id === id) {
      EditTableData.splice(i, 1);
      break;
    }
  }

  res.send({
    code: 200,
    data: EditTableData,
    msg: 'success',
  });
};

const TabTableData = async (req: Request, res: Response) => {
  await waitTime(1000);

  const valueEnum = ['success', 'error', 'processing', 'default'];

  const ipListDataSource = [];

  for (let i = 0; i < 15; i += 1) {
    ipListDataSource.push({
      ip: `106.14.98.1${i}4`,
      cpu: 10,
      mem: 20,
      status: valueEnum[Math.floor(Math.random() * 10) % 4],
      disk: 30,
    });
  }

  res.send({
    code: 200,
    data: ipListDataSource,
    msg: 'success',
  });
};

const ProTableData = async (req: Request, res: Response) => {
  await waitTime(1000);
  const valueEnum = ['success', 'error', 'processing', 'default'];

  const porTableList = [];

  for (let i = 0; i < 15; i += 1) {
    porTableList.push({
      key: i,
      startTime: new Date().toJSON(),
      endTime: new Date().toJSON(),
      status: valueEnum[Math.floor(Math.random() * 10) % 4],
      progress: Math.ceil(Math.random() * 100) + 1,
    });
  }

  res.send({
    code: 200,
    data: porTableList,
    msg: 'success',
  });
};

export default {
  'GET /api/table/BasisTableData': BasisTableData,
  'GET /api/table/BasisTableInnerData': BasisTableInnerData,
  'GET /api/table/EditTableData': GetEditTableData,
  'POST /api/table/EditTableData': CreateEditTableData,
  'PUT /api/table/EditTableData': UploadEditTableData,
  'DELETE /api/table/EditTableData': DeleteEditTableData,
  'GET /api/table/TabTableData': TabTableData,
  'GET /api/table/ProTableData': ProTableData,
};
