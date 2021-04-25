import React, { useState, useRef } from 'react';
import { Space, Button, Popconfirm, Spin, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { queryModalForm, deleteModalForm, queryModalDetail } from './services';
import type { modalFormDataType } from './data';
import { CreateModalForm, EditModalForm, EditDrawerForm } from './modals';

const ModalFormList: React.FC = () => {
  const [modalVisit, setModalVisit] = useState(false);
  const [modalUploadVisit, setModalUploadVisit] = useState(false);
  const [modalDrawerVisit, setModalDrawerVisit] = useState(false);
  const [detail, setDetail] = useState({} as modalFormDataType);
  const [spin, setSpin] = useState(false);

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
    deleteModalForm(id).then((data) => {
      if (data.code === 200) {
        message.success('删除成功');
        refreshList();
      }
    });
  };

  const getDetail = (id: number, type: string) => {
    setSpin(true);
    queryModalDetail(id).then((data) => {
      if (data.code === 200) {
        setDetail(data.data);
        if (type === 'modal') {
          setModalUploadVisit(true);
        } else {
          setModalDrawerVisit(true);
        }

        setSpin(false);
      } else {
        setSpin(false);
      }
    });
  };

  const tableAction = (id: number) => (
    <Space>
      <a onClick={() => getDetail(id, 'modal')}>弹框编辑</a>
      <a onClick={() => getDetail(id, 'drawer')}>滑框编辑</a>
      <Popconfirm title="是否删除此数据" onConfirm={() => confirm(id)} okText="是" cancelText="否">
        <a>删除</a>
      </Popconfirm>
    </Space>
  );

  const columns: ProColumns<modalFormDataType>[] = [
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
        status: ProcessMap[item.status],
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
      width: 175,
      render: (_, record) => tableAction(record.id),
    },
  ];

  return (
    <PageContainer>
      <Spin spinning={spin}>
        <ProTable<modalFormDataType>
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
          headerTitle="基础表格"
          request={(params) => queryModalForm({ ...params })}
          columns={columns}
          toolBarRender={() => [
            <Button onClick={() => setModalVisit(true)} type="primary">
              新增内容
            </Button>,
          ]}
        />

        <CreateModalForm
          modalVisit={modalVisit}
          setModalVisit={setModalVisit}
          refresh={refreshList}
        />
        <EditModalForm
          modalVisit={modalUploadVisit}
          setModalVisit={setModalUploadVisit}
          refresh={refreshList}
          detail={detail}
        />
        <EditDrawerForm
          drawerVisit={modalDrawerVisit}
          setDrawerVisit={setModalDrawerVisit}
          refresh={refreshList}
          detail={detail}
        />
      </Spin>
    </PageContainer>
  );
};

export default ModalFormList;
