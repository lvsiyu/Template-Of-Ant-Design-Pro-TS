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
    name: userRole === 'admin' ? '管理员账号' : '普通用户',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '个性签名',
    title: '其他简介(头衔等)',
    group: 'xxx公司－xxxxxxxx部－xxxxxx小组－xxxxxxx岗位',
    tags: [
      { key: '0', label: '标签1' },
      { key: '1', label: '标签2' },
      { key: '2', label: '标签3' },
      { key: '3', label: '标签4' },
      { key: '4', label: '标签5' },
      { key: '5', label: '标签6' },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    access: userRole,
    geographic: {
      province: {
        label: 'xx省',
        key: '330000',
      },
      city: {
        label: 'xx市',
        key: '330100',
      },
    },
    address: 'xxxx详细地址',
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
