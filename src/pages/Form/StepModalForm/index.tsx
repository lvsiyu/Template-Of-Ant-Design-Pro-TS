import React, { useRef, useState } from 'react';
import { Space, Popconfirm, Button, Spin, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { queryStepModalFormList, deleteStepModalFormList, queryStepModalDetail } from './services';
import type { getModalFormListDataType, stepModalFormDataType } from './data';
import { CreateStepModal, EditStepModal } from './modals';

const StepModalList: React.FC = () => {
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [spin, setSpin] = useState(false);
  const [editModalData, setEditModalData] = useState({} as stepModalFormDataType);
  const [currentStep, setCurrentStep] = useState(0);

  const ref = useRef<ActionType>();

  const ProcessMap = {
    close: 'normal',
    running: 'active',
    online: 'success',
    error: 'exception',
  };

  const refreshList = () => {
    ref?.current?.reload();
  };

  const confirm = (id: number) => {
    deleteStepModalFormList(id).then((data) => {
      if (data.code === 200) {
        message.success('删除成功');
        refreshList();
      }
    });
    if (ref.current) ref.current.reload();
  };

  const getDetail = (id: number) => {
    setSpin(true);
    setCurrentStep(0);
    queryStepModalDetail(id).then((data) => {
      if (data.code === 200) {
        setEditModalData(data.data);
        setEditModalVisible(true);
        setSpin(false);
      } else {
        setSpin(false);
      }
    });
  };

  const tableAction = (id: number) => (
    <Space>
      <a onClick={() => getDetail(id)}>编辑</a>
      <Popconfirm
        title="确认删除该列表？"
        onConfirm={() => confirm(id)}
        okText="是"
        cancelText="否"
      >
        <a>删除</a>
      </Popconfirm>
    </Space>
  );

  const columns: ProColumns<getModalFormListDataType>[] = [
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
      dataIndex: 'dateTime',
      ellipsis: true,
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
        status: item.status ? ProcessMap[item.status] : null,
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
      width: 85,
      render: (_, record) => tableAction(record.id),
    },
  ];

  return (
    <PageContainer>
      <Spin spinning={spin}>
        <ProTable<getModalFormListDataType>
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
          headerTitle="分步弹框表格"
          request={(params) => queryStepModalFormList({ ...params })}
          columns={columns}
          toolBarRender={() => [
            <Button
              onClick={() => {
                setCreateModalVisible(true);
                setCurrentStep(0);
              }}
              type="primary"
            >
              新增列表
            </Button>,
          ]}
        />

        <CreateStepModal
          visible={createModalVisible}
          setVisible={setCreateModalVisible}
          refresh={refreshList}
          currentNum={currentStep}
          current={setCurrentStep}
        />

        <EditStepModal
          visible={editModalVisible}
          setVisible={setEditModalVisible}
          detail={editModalData}
          refresh={refreshList}
          currentNum={currentStep}
          current={setCurrentStep}
        />
      </Spin>
    </PageContainer>
  );
};

export default StepModalList;
