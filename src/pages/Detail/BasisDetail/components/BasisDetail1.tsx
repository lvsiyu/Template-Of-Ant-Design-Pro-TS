import React from 'react';
import { Descriptions } from 'antd';
import type { basisDescriptionData1Data } from '../data/index';

interface BasisDetail1Props {
  data: basisDescriptionData1Data;
  loading: boolean;
}

const BasisDetail1: React.FC<BasisDetail1Props> = (props) => {
  const { data } = props;
  return (
    <Descriptions title="详情展示1" style={{ marginBottom: 32 }}>
      <Descriptions.Item label="详情标题1">{data.text1}</Descriptions.Item>
      <Descriptions.Item label="详情标题2">{data.text2}</Descriptions.Item>
      <Descriptions.Item label="详情标题3">{data.text3}</Descriptions.Item>
      <Descriptions.Item label="详情标题4">{data.text4}</Descriptions.Item>
    </Descriptions>
  );
};

export default BasisDetail1;
