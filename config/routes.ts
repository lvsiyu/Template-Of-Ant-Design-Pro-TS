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
            component: './User/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: '欢迎模板',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/charts',
    name: '图表模板',
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
      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    name: '管理模板',
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
      {
        component: './404',
      },
    ],
  },
  {
    name: '卡片模板',
    icon: 'CreditCardOutlined',
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
      {
        component: './404',
      },
    ],
  },
  {
    name: '表格模板',
    icon: 'TableOutlined',
    path: '/Table',
    routes: [
      {
        path: '/table/basis-table',
        name: '基础表格',
        component: './Table/BasisTable',
      },
      {
        path: '/table/modal-table',
        name: '弹框表格',
        component: './Table/ModalTable',
      },
      {
        path: '/table/tab-table',
        name: '分页表格',
        component: './Table/TabTable',
      },
      {
        path: '/table/edit-table',
        name: '编辑表格',
        component: './Table/EditTable',
      },
      {
        path: '/table/pro-table',
        name: '复杂表格',
        component: './Table/ProTable',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '详情模板',
    icon: 'AppstoreOutlined',
    path: '/Detail',
    routes: [
      {
        path: '/detail/basis-detail',
        name: '基础详情',
        component: './Detail/BasisDetail',
      },
      {
        path: '/detail/pro-detail',
        name: '复杂详情',
        component: './Detail/ProDetail',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '表单模板',
    icon: 'FormOutlined',
    path: '/Form',
    routes: [
      {
        path: '/form/basis-form',
        name: '基础表单',
        component: './Form/BasisForm',
      },
      {
        path: '/form/modal-form',
        name: '弹框表单',
        component: './Form/ModalForm',
      },
      {
        path: '/form/step-form',
        name: '分步表单',
        component: './Form/StepForm',
      },
      {
        path: '/form/step-modal-form',
        name: '分步弹窗',
        component: './Form/StepModalForm',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '列表模板',
    icon: 'AppstoreOutlined',
    path: '/List',
    routes: [
      {
        path: '/list/basis-list',
        name: '基础列表',
        component: './List/BasisList',
      },
      {
        path: '/list/detail-list',
        name: '详情列表',
        component: './List/DetailList',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '水印模板',
    icon: 'ExceptionOutlined',
    path: '/Water',
    routes: [
      {
        path: '/water/text-water',
        name: '文字水印',
        component: './Water/Text',
      },
      {
        path: '/water/pic-water',
        name: '图片水印',
        component: './Water/Pic',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '账户模板',
    icon: 'UserOutlined',
    path: '/Account',
    routes: [
      {
        path: '/account/center',
        name: '个人中心',
        component: './Account/UserCenter',
      },
      {
        path: '/account/settings',
        name: '账户设置',
        component: './Account/UserSetting',
      },
      {
        component: './404',
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
