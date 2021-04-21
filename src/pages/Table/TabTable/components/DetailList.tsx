import React, { useEffect, useState } from 'react';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

type TableListItem = {
  createdAtRange?: number[];
  createdAt: number;
  code: string;
};

type DetailListProps = {
  ip: string;
};

const TabTableDetailList: React.FC<DetailListProps> = (props) => {
  const { ip } = props;
  const [tableListDataSource, setTableListDataSource] = useState<TableListItem[]>([]);

  const columns: ProColumns<TableListItem>[] = [
    {
      title: '时间点',
      key: 'createdAt',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: '代码',
      key: 'code',
      width: 80,
      dataIndex: 'code',
      valueType: 'code',
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
    const source = [];
    for (let i = 0; i < 15; i += 1) {
      source.push({
        createdAt: Date.now() - Math.floor(Math.random() * 10000),
        code: `const getData = async params => {
          const data = await getData(params);
          return { list: data.data, ...data };
        };`,
        key: i,
      });
    }

    setTableListDataSource(source);
  }, [ip]);

  return (
    <ProTable<TableListItem>
      columns={columns}
      dataSource={tableListDataSource}
      pagination={{
        pageSize: 3,
        showSizeChanger: false,
      }}
      rowKey="key"
      toolBarRender={false}
      search={false}
    />
  );
};

export default TabTableDetailList;
