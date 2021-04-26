import type { Dispatch, SetStateAction } from 'react';
import React, { useState, useRef } from 'react';
import { Form, Input, DatePicker, Select, InputNumber, Spin, message } from 'antd';
import type { FormInstance } from 'antd';
import moment from 'moment';
import { DrawerForm } from '@ant-design/pro-form';
import { uploadModalForm } from '../services';
import type { modalFormDataType } from '../data';

const { TextArea } = Input;
const { Option } = Select;

interface ModalFormCreateProps {
  drawerVisit: boolean;
  setDrawerVisit: Dispatch<SetStateAction<boolean>>;
  refresh: () => void;
  detail: modalFormDataType;
}

const EditDrawerForm: React.FC<ModalFormCreateProps> = (props) => {
  const { drawerVisit, setDrawerVisit, refresh, detail } = props;
  const formRef = useRef<FormInstance>();

  const [loading, setLoading] = useState(false);

  const submitForm = async (values: modalFormDataType) => {
    setLoading(true);
    uploadModalForm({ ...values, id: detail.id }).then((data) => {
      if (data?.code === 200) {
        message.success('提交成功');
        setLoading(false);
        setDrawerVisit(false);
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

  return Object.keys(detail).length === 0 ? null : (
    <DrawerForm<modalFormDataType>
      formRef={formRef}
      title="弹框编辑表单"
      visible={drawerVisit}
      width={500}
      onFinish={async (values) => {
        submitForm(values);
      }}
      onVisibleChange={setDrawerVisit}
      initialValues={{
        name: detail.name,
        dateTime: moment(detail.dateTime),
        status: detail.status,
        progress: detail.progress,
        description: detail.description,
      }}
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

        <Form.Item name="progress" label="进度" rules={[{ required: true, message: '进度' }]}>
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
    </DrawerForm>
  );
};

export default EditDrawerForm;
