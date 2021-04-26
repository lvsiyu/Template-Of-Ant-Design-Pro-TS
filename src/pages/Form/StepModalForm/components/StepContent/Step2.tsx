import React from 'react';
import { Form, Select } from 'antd';
import ProCard from '@ant-design/pro-card';

const { Option } = Select;

const Step2: React.FC = () => {
  return (
    <ProCard
      bordered
      headerBordered
      title="第二步-状态选择"
      style={{
        marginBottom: 16,
        width: 750,
      }}
    >
      <Form.Item name="status" label="状态" rules={[{ required: true, message: '请选择状态' }]}>
        <Select placeholder="请选择状态">
          <Option value="all">全部</Option>
          <Option value="close">关闭</Option>
          <Option value="running">运行中</Option>
          <Option value="online">已上线</Option>
          <Option value="error">异常</Option>
        </Select>
      </Form.Item>
    </ProCard>
  );
};

export default Step2;
