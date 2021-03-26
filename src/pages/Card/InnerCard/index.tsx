import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <ProCard title="横向内部卡片" bordered headerBordered gutter={16}>
        <ProCard title="内部卡片标题" type="inner" bordered>
          内部卡片内容
        </ProCard>
        <ProCard title="内部卡片标题" type="inner" bordered>
          内部卡片内容
        </ProCard>
      </ProCard>

      <ProCard
        title="竖向内部卡片"
        bordered
        headerBordered
        direction="column"
        gutter={[0, 16]}
        style={{ marginTop: 8 }}
      >
        <ProCard title="内部卡片标题" type="inner" bordered>
          内部卡片内容
        </ProCard>
        <ProCard title="内部卡片标题" type="inner" bordered>
          内部卡片内容
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
