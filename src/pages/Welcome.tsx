import React from 'react';
import { Card, Result, Button } from 'antd';
import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import cool from '@/asserts/svg/cool.svg';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Result
          icon={<img src={cool} />}
          title="欢迎使用后台管理模板"
          extra={
            <Button type="primary">
              <Link to="/charts/antd-charts">开始探索</Link>
            </Button>
          }
        />
      </Card>
    </PageContainer>
  );
};
