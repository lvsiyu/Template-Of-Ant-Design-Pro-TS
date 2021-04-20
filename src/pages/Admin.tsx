import React from 'react';
import { Card, Result } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import cool from '@/asserts/svg/cool.svg';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Result icon={<img src={cool} />} title="欢迎使用后台管理模板" />
      </Card>
    </PageContainer>
  );
};
