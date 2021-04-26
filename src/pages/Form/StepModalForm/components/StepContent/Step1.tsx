import React from 'react';
import { Form, Input, DatePicker } from 'antd';
import ProCard from '@ant-design/pro-card';

const { TextArea } = Input;

const Step1: React.FC = () => {
  return (
    <>
      <ProCard
        title="第一步-基本信息"
        bordered
        headerBordered
        collapsible
        style={{
          marginBottom: 16,
          width: 750,
        }}
      >
        <Form.Item
          name="name"
          label="基本名称"
          rules={[{ required: true, message: '请输入基本名称' }]}
        >
          <Input placeholder="请输入基本名称" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="description"
          label="基本描述"
          rules={[{ required: true, message: '请输入基本描述' }]}
        >
          <TextArea placeholder="请输入基本描述" autoSize={{ minRows: 4, maxRows: 6 }} />
        </Form.Item>
      </ProCard>

      <ProCard
        title="第一步-日期选择"
        bordered
        headerBordered
        collapsible
        style={{
          marginBottom: 16,
          width: 750,
        }}
      >
        <Form.Item
          name="dateTime"
          label="日期显示"
          rules={[{ required: true, message: '请选择日期显示' }]}
        >
          <DatePicker showTime placeholder="请选择日期显示" style={{ width: '100%' }} />
        </Form.Item>
      </ProCard>
    </>
  );
};

export default Step1;
