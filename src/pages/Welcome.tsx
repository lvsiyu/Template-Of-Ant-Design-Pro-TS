import React, { useState } from 'react';
import { Card, Result, Button, Space } from 'antd';
import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { randomLogo } from '@/utils/emoticons';

export default (): React.ReactNode => {
  const [logoName, setLogoName] = useState(
    randomLogo[parseInt(`${Math.random() * randomLogo.length}`, 10)],
  );

  /* useEffect(() => {
    setInterval(() => {
      const name = randomLogo[parseInt(`${Math.random() * randomLogo.length}`, 10)];
      setLogoName(name);
    }, 1000);
  }, []); */
  return (
    <PageContainer>
      <Card>
        <Result
          icon={<img src={logoName} />}
          title="欢迎使用后台管理模板"
          extra={
            <Space>
              <Button type="primary">
                <Link to="/charts/antd-charts">开始探索</Link>
              </Button>
              <Button
                type="primary"
                onClick={() =>
                  setLogoName(randomLogo[parseInt(`${Math.random() * randomLogo.length}`, 10)])
                }
              >
                刷新表情
              </Button>
            </Space>
          }
        />
      </Card>
    </PageContainer>
  );
};
