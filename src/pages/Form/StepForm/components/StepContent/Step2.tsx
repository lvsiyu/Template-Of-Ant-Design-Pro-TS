import React from 'react';
import { Form, Input } from 'antd';
import ProCard from '@ant-design/pro-card';

const Step2: React.FC = () => {
  return (
    <ProCard
      bordered
      headerBordered
      title="第二步标题"
      style={{
        marginBottom: 16,
        minWidth: 800,
        maxWidth: '100%',
      }}
    >
      <Form.Item
        name="name3"
        label="基本名称3"
        rules={[{ required: true, message: '请输入基本名称3' }]}
      >
        <Input placeholder="请输入基本名称3" style={{ width: '100%' }} />
      </Form.Item>
    </ProCard>
  );
};

export default Step2;
