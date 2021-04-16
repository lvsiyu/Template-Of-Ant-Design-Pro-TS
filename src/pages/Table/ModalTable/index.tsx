import React, { useState, useRef } from 'react';
import {
  Button,
  Space,
  Tooltip,
  Popconfirm,
  Dropdown,
  Menu,
  Modal,
  notification,
  message,
} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { queryBasisTable } from './services';
import type { BasisTableDataType } from './data';
import { BasisModal } from './modals';

const ModalsTableList: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const ref = useRef<ActionType>();

  const processMap = {
    close: 'normal',
    running: 'active',
    online: 'success',
    error: 'exception',
  };

  const tableDate = (_text: unknown, record: BasisTableDataType) => (
    <Tooltip title={`${record.date} ${record.time}`}>
      <span>{`${record.date} ${record.time}`}</span>
    </Tooltip>
  );

  const reloadTable = () => {
    if (ref.current) ref.current.reload();
  };

  const confirm = () => {
    message.success('点了是');
    reloadTable();
  };

  const cancel = () => {
    message.error('点了否');
  };

  const tableAction = () => (
    <Space>
      <Popconfirm
        title="确认操作此按钮？"
        onConfirm={confirm}
        onCancel={cancel}
        okText="是"
        cancelText="否"
      >
        <a href="#">操作</a>
      </Popconfirm>
    </Space>
  );

  const infoModal = () => {
    Modal.info({
      centered: true,
      title: '这是消息弹出框',
      content: (
        <div>
          <p>内容内容...内容内容...</p>
          <p>内容内容...内容内容...</p>
        </div>
      ),
      onOk() {
        reloadTable();
      },
    });
  };

  const successModal = () => {
    Modal.success({
      centered: true,
      title: '这是成功弹出框',
      content: '内容内容...内容内容...',
      onOk() {
        reloadTable();
      },
    });
  };

  const errorModal = () => {
    Modal.error({
      centered: true,
      title: '这是错误弹出框',
      content: '内容内容...内容内容...',
      onOk() {
        reloadTable();
      },
    });
  };

  const warningModal = () => {
    Modal.warning({
      centered: true,
      title: '这是警告弹出框',
      content: '内容内容...内容内容...',
      onOk() {
        reloadTable();
      },
    });
  };

  const openNotificationWithIcon = (type: string, name: string) => {
    notification[type]({
      message: `这是${name}通知框`,
      description: '内容内容...内容内容...',
      onClose() {
        reloadTable();
      },
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    reloadTable();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const modalProps = {
    visible: isModalVisible,
    hideModal: handleCancel,
    handleOk,
  };

  const modalList = (
    <Menu>
      <Menu.Item key="1">
        <Button key="default" onClick={showModal}>
          默认对话框
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="primary" key="primary" onClick={infoModal}>
          消息对话框
        </Button>
      </Menu.Item>
      <Menu.Item key="3">
        <Button
          type="primary"
          key="primary"
          style={{ backgroundColor: '#52C41A' }}
          onClick={successModal}
        >
          成功对话框
        </Button>
      </Menu.Item>
      <Menu.Item key="4">
        <Button
          type="dashed"
          key="primary"
          style={{ backgroundColor: '#FAAD14' }}
          onClick={warningModal}
        >
          警告对话框
        </Button>
      </Menu.Item>
      <Menu.Item key="5">
        <Button type="primary" key="danger" danger onClick={errorModal}>
          错误对话框
        </Button>
      </Menu.Item>
    </Menu>
  );

  const notificationList = (
    <Menu>
      <Menu.Item key="1">
        <Button key="default" onClick={() => openNotificationWithIcon('open', '默认')}>
          默认通知框
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button
          type="primary"
          key="primary"
          onClick={() => openNotificationWithIcon('info', '消息')}
        >
          消息通知框
        </Button>
      </Menu.Item>
      <Menu.Item key="3">
        <Button
          type="primary"
          key="primary"
          style={{ backgroundColor: '#52C41A' }}
          onClick={() => openNotificationWithIcon('success', '成功')}
        >
          成功通知框
        </Button>
      </Menu.Item>
      <Menu.Item key="4">
        <Button
          type="dashed"
          key="warning"
          style={{ backgroundColor: '#FAAD14' }}
          onClick={() => openNotificationWithIcon('warning', '警告')}
        >
          警告通知框
        </Button>
      </Menu.Item>
      <Menu.Item key="5">
        <Button
          type="primary"
          key="danger"
          danger
          onClick={() => openNotificationWithIcon('error', '错误')}
        >
          错误通知框
        </Button>
      </Menu.Item>
    </Menu>
  );

  const columns: ProColumns<BasisTableDataType>[] = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '基本名称',
      dataIndex: 'name',
      ellipsis: true,
    },
    {
      title: '基本描述',
      dataIndex: 'description',
      search: false,
      ellipsis: true,
    },
    {
      title: '日期显示',
      dataIndex: 'date-time',
      ellipsis: true,
      render: (text, record) => tableDate(text, record),
    },
    {
      title: '状态',
      dataIndex: 'status',
      initialValue: 'all',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        close: { text: '关闭', status: 'Default' },
        running: { text: '运行中', status: 'Processing' },
        online: { text: '已上线', status: 'Success' },
        error: { text: '异常', status: 'Error' },
      },
    },
    {
      title: '进度展示',
      dataIndex: 'progress',
      valueType: (item) => ({
        type: 'progress',
        status: processMap[item.status],
      }),
    },
    {
      title: '时间选择',
      dataIndex: 'selectTime',
      hideInTable: true,
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 46,
      render: tableAction,
    },
  ];

  return (
    <PageContainer>
      <ProTable<BasisTableDataType>
        actionRef={ref}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        bordered
        pagination={{
          showQuickJumper: true,
          pageSize: 10,
        }}
        headerTitle="弹框表格"
        request={(params) => queryBasisTable({ ...params })}
        columns={columns}
        toolBarRender={() => [
          <Dropdown key="menu" overlay={modalList} trigger={['click']}>
            <Button type="primary">
              对话框展示 <DownOutlined />
            </Button>
          </Dropdown>,
          <Dropdown key="menu" overlay={notificationList} trigger={['click']}>
            <Button type="primary">
              通知框展示 <DownOutlined />
            </Button>
          </Dropdown>,
        ]}
      />

      <BasisModal {...modalProps} />
    </PageContainer>
  );
};

export default ModalsTableList;
