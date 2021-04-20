import React, { useState, useEffect } from 'react';
import { Card, Result, Button } from 'antd';
import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { randomLogo } from '@/utils/emoticons';

export default (): React.ReactNode => {
  const [logoName, setLogoName] = useState(
    randomLogo[parseInt(`${Math.random() * randomLogo.length}`, 10)],
  );

  useEffect(() => {
    setInterval(() => {
      const name = randomLogo[parseInt(`${Math.random() * randomLogo.length}`, 10)];
      setLogoName(name);
    }, 1000);
  }, []);
  return (
    <PageContainer>
      <Card>
        <Result
          icon={<img src={logoName} />}
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
