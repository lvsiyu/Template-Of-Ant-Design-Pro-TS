import React from 'react';
import { Button, Badge, message } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { queryTabTable } from '../services';
import type { IpListItemDataType } from '../data';
import styles from '../style/index.less';

type IPListProps = {
  ip: string;
  onChange: (id: string) => void;
};

const TabTableList: React.FC<IPListProps> = (props) => {
  const { onChange, ip } = props;

  const columns: ProColumns<IpListItemDataType>[] = [
    {
      title: 'IP',
      key: 'ip',
      dataIndex: 'ip',
      render: (_, item) => {
        return <Badge status={item.status} text={item.ip} />;
      },
    },
    {
      title: 'CPU',
      key: 'cpu',
      dataIndex: 'cpu',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
    {
      title: 'Mem',
      key: 'mem',
      dataIndex: 'mem',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
    {
      title: 'Disk',
      key: 'disk',
      dataIndex: 'disk',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
  ];
  return (
    <ProTable<IpListItemDataType>
      columns={columns}
      bordered
      request={(params) => queryTabTable({ ...params })}
      rowKey="ip"
      rowClassName={(record) => {
        return record.ip === ip ? styles['split-row-select-active'] : '';
      }}
      toolbar={{
        search: {
          onSearch: (value) => {
            message.success(value);
          },
        },
        actions: [
          <Button key="list" type="primary">
            新建项目
          </Button>,
        ],
      }}
      options={false}
      pagination={{ pageSize: 10, showSizeChanger: false }}
      search={false}
      onRow={(record) => {
        return {
          onClick: () => {
            if (record.ip) {
              onChange(record.ip);
            }
          },
        };
      }}
    />
  );
};

export default TabTableList;
