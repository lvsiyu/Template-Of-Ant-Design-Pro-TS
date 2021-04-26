import type { Dispatch, SetStateAction } from 'react';
import React, { useState, useRef } from 'react';
import { Form, Input, DatePicker, Select, InputNumber, Spin, message } from 'antd';
import type { FormInstance } from 'antd';
import { ModalForm } from '@ant-design/pro-form';
import { createModalForm } from '../services';
import type { modalFormDataType } from '../data';

const { TextArea } = Input;
const { Option } = Select;

interface ModalFormCreateProps {
  modalVisit: boolean;
  setModalVisit: Dispatch<SetStateAction<boolean>>;
  refresh: () => void;
}

const CreateModalForm: React.FC<ModalFormCreateProps> = (props) => {
  const { modalVisit, setModalVisit, refresh } = props;
  const formRef = useRef<FormInstance>();

  const [loading, setLoading] = useState(false);

  const submitForm = async (values: modalFormDataType) => {
    setLoading(true);
    createModalForm(values).then((data) => {
      if (data?.code === 200) {
        message.success('提交成功');
        setLoading(false);
        setModalVisit(false);
        refresh();
        formRef.current?.resetFields();
        return true;
      }
      message.error('提交失败，请检查内容');
      setLoading(false);
      formRef.current?.resetFields();
      return false;
    });
  };

  return (
    <ModalForm<modalFormDataType>
      formRef={formRef}
      title="弹框表单"
      visible={modalVisit}
      width={500}
      onFinish={async (values) => {
        submitForm(values);
      }}
      onVisibleChange={setModalVisit}
    >
      <Spin spinning={loading}>
        <Form.Item
          name="name"
          label="基本名称"
          rules={[{ required: true, message: '请输入基本名称' }]}
        >
          <Input placeholder="请输入基本名称" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="dateTime"
          label="日期显示"
          rules={[{ required: true, message: '请选择日期显示' }]}
        >
          <DatePicker showTime placeholder="请选择日期显示" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="status" label="状态" rules={[{ required: true, message: '请选择状态' }]}>
          <Select placeholder="请选择状态">
            <Option value="all">全部</Option>
            <Option value="close">关闭</Option>
            <Option value="running">运行中</Option>
            <Option value="online">已上线</Option>
            <Option value="error">异常</Option>
          </Select>
        </Form.Item>

        <Form.Item name="progress" label="进度" rules={[{ required: true, message: '请输入进度' }]}>
          <InputNumber min={0} max={100} placeholder="进度" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="description"
          label="基本描述"
          rules={[{ required: true, message: '请输入基本描述' }]}
        >
          <TextArea placeholder="请输入基本描述" autoSize={{ minRows: 4, maxRows: 6 }} />
        </Form.Item>
      </Spin>
    </ModalForm>
  );
};

export default CreateModalForm;
