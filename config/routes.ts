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
    path: '/charts',
    name: '图表页面',
    icon: 'AreaChartOutlined',
    routes: [
      {
        path: '/charts/antd-charts',
        name: '使用AntdCharts',
        component: './Charts/AntdCharts',
      },
      {
        path: '/charts/biz-charts',
        name: '使用BizCharts',
        component: './Charts/BizCharts',
      },
      {
        path: '/charts/echarts',
        name: '使用Echarts',
        component: './Charts/Echarts',
      },
    ],
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
    routes: [
      {
        path: '/card/basis-card',
        name: '基础卡片',
        component: './Card/BasisCard',
      },
      {
        path: '/card/inner-card',
        name: '内部卡片',
        component: './Card/InnerCard',
      },
      {
        path: '/card/action-card',
        name: '交互卡片',
        component: './Card/ActionCard',
      },
      {
        path: '/card/step-card',
        name: '分步卡片',
        component: './Card/StepCard',
      },
      {
        path: '/card/pro-card',
        name: '高级卡片',
        component: './Card/ProCard',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
