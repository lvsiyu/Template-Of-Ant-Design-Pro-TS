import React, { useState, useEffect, useRef } from 'react';
import { Space, Popconfirm, Tooltip, Card, Image, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import errorPic from '@/asserts/img/error.png';
import { queryBasisTable, queryBasisTableInner } from './services';
import type { BasisTableDataType, BasisTableInnerDataType } from './data';

const BasisTableList: React.FC = () => {
  const [basisInnerTableData, setBasisInnerTableData] = useState([]);

  const ref = useRef<ActionType>();

  useEffect(() => {
    queryBasisTableInner().then(({ data }) => setBasisInnerTableData(data || []));
  }, []);

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

  const confirm = () => {
    message.success('点了是');
    if (ref.current) ref.current.reload();
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

  const tableInnerImg = (text: unknown) => {
    if (typeof text === 'string') {
      return <Image width={80} src={text} />;
    }
    return <Image width={80} src="error" fallback={errorPic} />;
  };

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
      width: 70,
      render: tableAction,
    },
  ];

  const innerColumns: ProColumns<BasisTableInnerDataType>[] = [
    { title: '名称', dataIndex: 'name', width: 200 },
    { title: '描述', dataIndex: 'description' },
    {
      title: '图片',
      dataIndex: 'url',
      width: 80,
      render: (text) => tableInnerImg(text),
    },
  ];

  const expandedRowRender = () => {
    return (
      <Card title="内嵌表格">
        <ProTable
          rowKey="id"
          columns={innerColumns}
          headerTitle={false}
          search={false}
          options={false}
          dataSource={basisInnerTableData && basisInnerTableData}
          pagination={false}
          bordered
        />
      </Card>
    );
  };

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
        headerTitle="基础表格"
        request={(params) => queryBasisTable({ ...params })}
        columns={columns}
        expandable={basisInnerTableData && { expandedRowRender }}
      />
    </PageContainer>
  );
};

export default BasisTableList;
