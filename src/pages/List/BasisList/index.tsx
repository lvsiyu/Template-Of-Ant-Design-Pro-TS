import React, { useState, useEffect } from 'react';
import type { ReactText } from 'react';
import { Button, Progress, Tag, Space, Popconfirm, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import ProList from '@ant-design/pro-list';
import { queryBasisList } from './services';
import type { BasisListDataType } from './data/index';

const dataSource: BasisListDataType[] = [];
for (let i = 0; i < 10; i += 1) {
  dataSource.push({
    title: `标题${i + 1}`,
    avatar:
      'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  });
}

const BasisList: React.FC = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<readonly ReactText[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<ReactText[]>([]);
  const [basisListData, setBasisListData] = useState([] as BasisListDataType[]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys: ReactText[]) => setSelectedRowKeys(keys),
  };
  useEffect(() => {
    queryBasisList().then(({ data }) => setBasisListData(data || []));
  });

  const confirm = () => {
    message.success('点了是');
  };

  const cancel = () => {
    message.success('点了否');
  };

  const basisListTag = () => {
    return (
      <Space size={0}>
        <Tag color="blue">tag1</Tag>
        <Tag color="#5BD8A6">tag2</Tag>
      </Space>
    );
  };

  const basisListProgress = () => {
    return (
      <div style={{ minWidth: 200, flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: '200px' }}>
          <div>发布中</div>
          <Progress percent={80} />
        </div>
      </div>
    );
  };

  const basisListDescription = () => {
    return (
      <span style={{ maxWidth: 200 }}>
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
      </span>
    );
  };

  const basisListAction = () => {
    return (
      <Popconfirm
        title="确认操作?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="是"
        cancelText="否"
      >
        <a>操作</a>
      </Popconfirm>
    );
  };

  const basisListToolBar = () => {
    return [
      <Button key="3" type="primary">
        按钮
      </Button>,
    ];
  };
  return (
    <PageContainer>
      <ProCard>
        <ProList
          rowKey="title"
          headerTitle="基础列表"
          toolBarRender={basisListToolBar}
          dataSource={dataSource}
          pagination={{ pageSize: 5 }}
          expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
          split
          metas={{
            title: {},
            subTitle: { render: basisListTag },
            description: { render: basisListDescription },
            avatar: {},
            content: { render: basisListProgress },
            actions: { render: basisListAction },
          }}
        />
      </ProCard>
      <ProCard style={{ marginTop: 15 }}>
        <ProList
          rowKey="title"
          headerTitle="带请求数据的基础列表"
          toolBarRender={basisListToolBar}
          expandable={{ expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys }}
          dataSource={basisListData && basisListData}
          pagination={{ pageSize: 5 }}
          rowSelection={rowSelection}
          split
          loading={basisListData?.length === 0}
          metas={{
            title: {},
            subTitle: { render: basisListTag },
            description: { render: basisListDescription },
            avatar: {},
            content: { render: basisListProgress },
            actions: { render: basisListAction },
          }}
        />
      </ProCard>
    </PageContainer>
  );
};

export default BasisList;
