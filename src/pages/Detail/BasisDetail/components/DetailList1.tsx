import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { basicGoodsData } from '../data/index';

interface DetailList1Props {
  basicGoods: basicGoodsData[];
  loading: boolean;
}

const DetailList1: React.FC<DetailList1Props> = (props) => {
  const { basicGoods, loading } = props;

  const goodsColumns: ColumnsType<basicGoodsData> = [
    {
      title: '编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '条码',
      dataIndex: 'barcode',
      key: 'barcode',
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      align: 'right',
    },
    {
      title: '数量（件）',
      dataIndex: 'num',
      key: 'num',
      align: 'right',
    },
    {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      align: 'right',
    },
  ];
  return (
    <Table
      bordered
      style={{ marginBottom: 24 }}
      pagination={false}
      loading={loading}
      dataSource={basicGoods}
      columns={goodsColumns}
      rowKey="id"
    />
  );
};

export default DetailList1;
