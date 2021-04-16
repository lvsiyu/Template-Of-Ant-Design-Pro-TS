import React, { useRef } from 'react';
import { Space, Tooltip } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { queryBasisTable } from './services';
import type { BasisTableDataType } from './data';

const ModalsTableList: React.FC = () => {
  const ref = useRef<ActionType>();

  const ProcessMap = {
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

  const tableAction = () => (
    <Space>
      <a>弹框显示</a>
    </Space>
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
      width: 75,
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
      />
    </PageContainer>
  );
};

export default ModalsTableList;
