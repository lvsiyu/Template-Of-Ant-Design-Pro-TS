import React, { useEffect, useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

type TableListItem = {
  createdAtRange?: number[];
  createdAt: number;
  progress: number;
  status: string;
  key: number;
};

type DetailListProps = {
  ip: string;
};

const ProcessMap = {
  default: 'normal',
  processing: 'active',
  success: 'success',
  error: 'exception',
};

const valueEnum = ['success', 'error', 'processing', 'default'];

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const TabTableDetailList: React.FC<DetailListProps> = (props) => {
  const { ip } = props;
  const [tableListDataSource, setTableListDataSource] = useState<TableListItem[]>([]);
  const [loadingStatus, setLoadingStatus] = useState(false);

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '时间点',
      key: 'createdAt',
      dataIndex: 'createdAt',
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
      title: '进度展示',
      dataIndex: 'progress',
      valueType: (item) => ({
        type: 'progress',
        status: ProcessMap[item.status],
      }),
    },
    {
      title: '操作',
      key: 'option',
      width: 80,
      valueType: 'option',
      render: () => [<a key="a">预警</a>],
    },
  ];

  useEffect(() => {
    const source: TableListItem[] = [];
    for (let i = 0; i < 25; i += 1) {
      source.push({
        createdAt: Date.now() - Math.floor(Math.random() * 10000),
        progress: Math.ceil(Math.random() * 100) + 1,
        status: valueEnum[Math.floor(Math.random() * 10) % 4],
        key: i,
      });
    }
    setLoadingStatus(true);
    waitTime(1000).then(() => {
      setTableListDataSource(source);
      setLoadingStatus(false);
    });
  }, [ip]);

  return (
    <ProTable<TableListItem>
      columns={columns}
      bordered
      dataSource={tableListDataSource}
      loading={loadingStatus}
      pagination={{ pageSize: 10 }}
      rowKey="key"
      toolBarRender={false}
      search={false}
    />
  );
};

export default TabTableDetailList;
