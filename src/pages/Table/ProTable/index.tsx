import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { queryBasisTable } from './services';
import type { ProTableDataType } from './data';
import { ProTableListMenu, ProTableListDescription } from './components';

const ProcessMap = {
  default: 'normal',
  processing: 'active',
  success: 'success',
  error: 'exception',
};

const columns: ProColumns<ProTableDataType>[] = [
  {
    title: '序号',
    dataIndex: 'index',
    valueType: 'index',
    width: 80,
  },
  {
    title: '开始时间',
    key: 'startDate',
    dataIndex: 'startTime',
    valueType: 'dateTime',
  },
  {
    title: '结束时间',
    key: 'endDate',
    dataIndex: 'endTime',
    valueType: 'dateTime',
  },
  {
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    valueEnum: {
      default: { text: '关闭', status: 'Default' },
      processing: { text: '运行中', status: 'Processing' },
      success: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '执行进度',
    dataIndex: 'progress',
    width: 350,
    valueType: (item) => ({
      type: 'progress',
      status: ProcessMap[item.status],
    }),
  },
];

const listTitle = (key: string): string => {
  let titleName = '暂无';
  switch (key) {
    case '1':
      titleName = '第一组内容1';
      break;
    case '2':
      titleName = '第一组内容2';
      break;
    case '3':
      titleName = '第二组内容1';
      break;
    case '4':
      titleName = '第二组内容2';
      break;
    default:
      titleName = '暂无';
      break;
  }
  return titleName;
};

const ProTableList: React.FC = () => {
  const [key, setKey] = useState('1');

  return (
    <PageContainer>
      <ProTable<ProTableDataType>
        columns={columns}
        rowKey="key"
        bordered
        pagination={{
          showSizeChanger: true,
        }}
        tableRender={(_, dom) => <ProTableListMenu setKey={setKey} dom={dom} />}
        tableExtraRender={(_, data) => <ProTableListDescription data={data} />}
        params={{
          key,
        }}
        request={(params) => queryBasisTable({ ...params })}
        dateFormatter="string"
        headerTitle={listTitle(key)}
      />
    </PageContainer>
  );
};

export default ProTableList;
