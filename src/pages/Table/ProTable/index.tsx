import React, { useState } from 'react';
import { Card, Menu, Descriptions } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { queryBasisTable } from './services';
import type { ProTableDataType } from './data';

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
        tableRender={(_, dom) => (
          <div
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Menu
              onSelect={(e) => setKey(e.key as string)}
              style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </Menu>
            <div
              style={{
                flex: 1,
              }}
            >
              {dom}
            </div>
          </div>
        )}
        tableExtraRender={(_, data) => (
          <Card>
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="Row">{data.length}</Descriptions.Item>
              <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
              <Descriptions.Item label="Association">
                <a>421421</a>
              </Descriptions.Item>
              <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
              <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
            </Descriptions>
          </Card>
        )}
        params={{
          key,
        }}
        request={(params) => queryBasisTable({ ...params })}
        dateFormatter="string"
        headerTitle="复杂表格"
      />
    </PageContainer>
  );
};

export default ProTableList;
