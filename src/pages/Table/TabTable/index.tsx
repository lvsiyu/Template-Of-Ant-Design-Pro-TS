import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProDescriptions from '@ant-design/pro-descriptions';
import { TabTableList, TabTableDetailList } from './components';

const TabTable: React.FC = () => {
  const [ip, setIp] = useState('0.0.0.0');
  return (
    <PageContainer>
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <ProCard style={{ paddingBottom: 0 }}>
            <ProDescriptions column={5}>
              <ProDescriptions.Item label="标题1">内容1</ProDescriptions.Item>
              <ProDescriptions.Item label="标题2">内容2</ProDescriptions.Item>
              <ProDescriptions.Item label="标题3">内容3</ProDescriptions.Item>
              <ProDescriptions.Item label="标题4">内容4</ProDescriptions.Item>
              <ProDescriptions.Item label="标题5">内容5</ProDescriptions.Item>
              <ProDescriptions.Item label="标题6">内容6</ProDescriptions.Item>
              <ProDescriptions.Item label="标题7">内容7</ProDescriptions.Item>
              <ProDescriptions.Item label="标题8">内容8</ProDescriptions.Item>
              <ProDescriptions.Item label="标题9">内容9</ProDescriptions.Item>
              <ProDescriptions.Item label="标题10">内容10</ProDescriptions.Item>
            </ProDescriptions>
          </ProCard>
        </Col>
        <Col span={24}>
          <ProCard split="vertical">
            <ProCard colSpan="384px" ghost>
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
