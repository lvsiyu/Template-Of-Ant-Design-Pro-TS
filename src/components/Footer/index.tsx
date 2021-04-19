/* import { GithubOutlined } from '@ant-design/icons'; */
import { DefaultFooter } from '@ant-design/pro-layout';
import { companyText } from '@/utils/common';

export default () => (
  <DefaultFooter
    copyright={false}
    links={[
      {
        key: '1',
        title: companyText,
        href: 'https://github.com/lvsiyu/Template-Of-Ant-Design-Pro-TS',
      },
      /* {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true,
      }, */
    ]}
  />
);
