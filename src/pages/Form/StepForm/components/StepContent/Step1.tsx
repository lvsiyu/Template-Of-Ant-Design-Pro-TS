import React from 'react';
import { Form, Input } from 'antd';
import ProCard from '@ant-design/pro-card';

const Step1: React.FC = () => {
  return (
    <>
      <ProCard
        title="卡片1"
        bordered
        headerBordered
        collapsible
        style={{
          marginBottom: 16,
          minWidth: 800,
          maxWidth: '100%',
        }}
      >
        <Form.Item
          name="name1"
          label="基本名称1"
          rules={[{ required: true, message: '请输入基本名称1' }]}
        >
          <Input placeholder="请输入基本名称1" style={{ width: '100%' }} />
        </Form.Item>
      </ProCard>

      <ProCard
        title="卡片2"
        bordered
        headerBordered
        collapsible
        style={{
          marginBottom: 16,
          minWidth: 800,
          maxWidth: '100%',
        }}
      >
        <Form.Item
          name="name2"
          label="基本名称2"
          rules={[{ required: true, message: '请输入基本名称2' }]}
        >
          <Input placeholder="请输入基本名称2" style={{ width: '100%' }} />
        </Form.Item>
      </ProCard>
    </>
  );
};

export default Step1;
