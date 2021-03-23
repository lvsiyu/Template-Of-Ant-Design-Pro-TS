export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: '登录',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎页面',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: '二级页面',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    name: '列表页面',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: '卡片页面',
    icon: 'AppstoreOutlined',
    path: '/card',
    component: './Card',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
