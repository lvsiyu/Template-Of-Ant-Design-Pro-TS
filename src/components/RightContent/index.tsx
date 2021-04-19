import { Tag, Space, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang, Link } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="图表模板"
        options={[
          {
            label: <Link to="/charts/antd-charts">图表模板</Link>,
            value: '图表模板',
          },
          {
            label: <Link to="/card/basis-card">卡片模板</Link>,
            value: '卡片模板',
          },
          {
            label: <Link to="/table/basis-table">表格模板</Link>,
            value: '表格模板',
          },
          {
            label: <Link to="/detail/basis-detail">详情模板</Link>,
            value: '详情模板',
          },
          {
            label: <Link to="/list/basis-list">列表模板</Link>,
            value: '列表模板',
          },
        ]}
        onSearch={(value) => {
          message.success(`搜索内容为: ${value}`);
        }}
      />
      <span
        className={styles.action}
        onClick={() => {
          window.open('https://pro.ant.design/docs/getting-started');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <Avatar />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
      <SelectLang className={styles.action} />
    </Space>
  );
};
export default GlobalHeaderRight;
