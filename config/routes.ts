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
    name: '管理页面',
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
    name: '图表页面',
    icon: 'AreaChartOutlined',
    path: '/charts',
    component: './Charts',
  },
  {
    path: '/',
    redirect: '/user/Login',
  },
  {
    component: './404',
  },
];
