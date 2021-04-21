import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProDescriptions from '@ant-design/pro-descriptions';
import { TabTableList, TabTableDetailList } from './components';

type titleListType = {
  label: string;
  content: string;
};

const titleList: titleListType[] = [];
for (let i = 0; i < 10; i += 1) {
  titleList.push({
    label: `标题${i + 1}`,
    content: `内容${i + 1}`,
  });
}

const TabTable: React.FC = () => {
  const [ip, setIp] = useState('0.0.0.0');

  return (
    <PageContainer>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <ProCard style={{ paddingBottom: 0 }}>
            <ProDescriptions column={5}>
              {titleList.map((item: titleListType) => (
                <ProDescriptions.Item key={item.label} label={item.label}>
                  {item.content}
                </ProDescriptions.Item>
              ))}
            </ProDescriptions>
          </ProCard>
        </Col>
        <Col span={24}>
          <ProCard split="vertical">
            <ProCard colSpan="400px" ghost>
              <TabTableList onChange={(cIp) => setIp(cIp)} ip={ip} />
            </ProCard>
            <ProCard title={ip}>
              <TabTableDetailList ip={ip} />
            </ProCard>
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default TabTable;
