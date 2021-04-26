import React from 'react';
import { Form, InputNumber } from 'antd';
import ProCard from '@ant-design/pro-card';

const Step3: React.FC = () => {
  return (
    <ProCard
      bordered
      headerBordered
      title="第三步-进度填写"
      style={{
        marginBottom: 16,
        width: 750,
      }}
    >
      <Form.Item name="progress" label="进度" rules={[{ required: true, message: '请输入进度' }]}>
        <InputNumber min={0} max={100} placeholder="请输入状态" style={{ width: '100%' }} />
      </Form.Item>
    </ProCard>
  );
};

export default Step3;
