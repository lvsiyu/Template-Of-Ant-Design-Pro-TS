import React, { useState /* , useEffect */ } from 'react';
import { Card, Result, Button, Space } from 'antd';
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
          title="这是只有管理员才能看到的界面，普通用户登录无法看到"
          subTitle="使用user账号重新登陆后就无法看到该界面，具体修改请在route文件中以及access文件中修改"
          extra={
            <Space>
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
