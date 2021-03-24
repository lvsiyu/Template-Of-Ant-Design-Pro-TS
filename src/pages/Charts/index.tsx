import React from 'react';
import { Space, Button } from 'antd';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { Lines } from './components';

const Charts: React.FC = () => {
  return (
    <PageContainer>
      <ProCard title="基础折线图">
        <Lines.BasisLine />
      </ProCard>
      <FooterToolbar
        children={
          <Space>
            <Button>返回</Button>
          </Space>
        }
      />
    </PageContainer>
  );
};

export default Charts;
