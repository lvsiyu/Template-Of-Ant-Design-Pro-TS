import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

let userRole: string | false = false;

const getLogin = async (req: Request, res: Response) => {
  const { password, username } = req.body;
  await waitTime(2000);
  if (password === '123456' && username === 'admin') {
    res.send({
      status: 'ok',
      currentAuthority: 'admin',
    });
    userRole = 'admin';
    return;
  }
  if (password === '123456' && username === 'user') {
    res.send({
      status: 'ok',
      currentAuthority: 'user',
    });
    userRole = 'user';
    return;
  }
  res.send({
    status: 'error',
    currentAuthority: 'guest',
  });
  userRole = false;
};

const getUserInfo = (req: Request, res: Response) => {
  // 支持值为 Object 和 Array

  if (!userRole) {
    res.status(401).send({
      data: {
        isLogin: false,
      },
      errorCode: '401',
      errorMessage: '请先登录！',
      success: true,
    });
    return;
  }
  res.send({
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注设计',
      },
      {
        key: '2',
        label: '辣~',
      },
      {
        key: '3',
        label: '大长腿',
      },
      {
        key: '4',
        label: '川妹子',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    access: userRole,
    geographic: {
      province: {
        label: '浙江省',
        key: '330000',
      },
      city: {
        label: '杭州市',
        key: '330100',
      },
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
  });
};

const getLogout = (req: Request, res: Response) => {
  userRole = false;
  res.send({ data: {}, success: true });
};

export default {
  'POST /api/login': getLogin,
  'GET /api/currentUser': getUserInfo,
  'POST /api/login/outLogin': getLogout,
};
