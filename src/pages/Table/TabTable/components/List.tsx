import React from 'react';
import type { BadgeProps } from 'antd';
import { Button, Badge, message } from 'antd';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import styles from '../style/index.less';

type statusType = BadgeProps['status'];

const valueEnum: statusType[] = ['success', 'error', 'processing', 'default'];

export type IpListItem = {
  ip?: string;
  cpu?: number | string;
  mem?: number | string;
  disk?: number | string;
  status: statusType;
};

const ipListDataSource: IpListItem[] = [];

for (let i = 0; i < 10; i += 1) {
  ipListDataSource.push({
    ip: `106.14.98.1${i}4`,
    cpu: 10,
    mem: 20,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    disk: 30,
  });
}

type IPListProps = {
  ip: string;
  onChange: (id: string) => void;
};

const TabTableList: React.FC<IPListProps> = (props) => {
  const { onChange, ip } = props;

  const columns: ProColumns<IpListItem>[] = [
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
    <ProTable<IpListItem>
      columns={columns}
      request={
        (/* params, sorter, filter */) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          /* console.log(params, sorter, filter); */
          return Promise.resolve({
            data: ipListDataSource,
            success: true,
          });
        }
      }
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
      pagination={false}
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
