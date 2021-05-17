import React, { useState, useEffect } from 'react';
import { Button, Tag, Space } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import ProList from '@ant-design/pro-list';
import { fillKeyValues } from '@/utils/common';
import { queryDetailList } from './services';
import type { DetailDataType } from './data/index';

const IconText = ({ icon, text }: { icon: any; text: number | false }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const BasisList: React.FC = () => {
  const [detailsListData, setDetailsListData] = useState([] as DetailDataType[]);
  useEffect(() => {
    queryDetailList().then(({ data }) => setDetailsListData(data || []));
  });

  const detailsListExtra = () => {
    return [
      <Button key="3" type="primary">
        操作
      </Button>,
    ];
  };

  const detailsListTag = (text: React.ReactNode, record: DetailDataType) => {
    return (
      <Space>
        {record?.tag?.length > 0 &&
          record.tag.map((item, index) => <Tag key={`${index + 1}`}>{item}</Tag>)}
      </Space>
    );
  };

  const detailsListActions = (text: React.ReactNode, record: DetailDataType) => {
    return (
      <Space>
        <IconText
          icon={StarOutlined}
          text={record?.action?.length > 0 && fillKeyValues('star', record.action)}
          key="list-vertical-star-o"
        />
        <IconText
          icon={LikeOutlined}
          text={record?.action?.length > 0 && fillKeyValues('great', record.action)}
          key="list-vertical-like-o"
        />
        <IconText
          icon={MessageOutlined}
          text={record?.action?.length > 0 && fillKeyValues('message', record.action)}
          key="list-vertical-message"
        />
      </Space>
    );
  };

  const detailsListImgs = (text: React.ReactNode, record: DetailDataType) => {
    return <img width={272} alt="logo" src={record.image} />;
  };

  const detailsListContent = (text: React.ReactNode) => {
    return <div>{text}</div>;
  };

  return (
    <PageContainer>
      <ProList
        toolBarRender={detailsListExtra}
        itemLayout="vertical"
        rowKey="id"
        headerTitle="详情列表展示栏"
        dataSource={detailsListData && detailsListData}
        pagination={{ pageSize: 5 }}
        loading={detailsListData?.length === 0}
        metas={{
          title: {},
          description: { render: (text, record) => detailsListTag(text, record) },
          actions: { render: (text, record) => detailsListActions(text, record) },
          extra: { render: (text, record) => detailsListImgs(text, record) },
          content: { render: (text) => detailsListContent(text) },
        }}
      />
    </PageContainer>
  );
};

export default BasisList;
