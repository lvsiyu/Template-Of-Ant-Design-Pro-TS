import React from 'react';
import { Descriptions } from 'antd';
import type { basisDescriptionData2Data } from '../data/index';

interface BasisDetail2Props {
  data: basisDescriptionData2Data;
  loading: boolean;
}

const BasisDetail2: React.FC<BasisDetail2Props> = (props) => {
  const { data } = props;
  return (
    <Descriptions title="详情展示2" style={{ marginBottom: 32 }}>
      <Descriptions.Item label="详情标题1">{data.text1}</Descriptions.Item>
      <Descriptions.Item label="详情标题2">{data.text2}</Descriptions.Item>
      <Descriptions.Item label="详情标题3">{data.text3}</Descriptions.Item>
      <Descriptions.Item label="详情标题4">{data.text4}</Descriptions.Item>
    </Descriptions>
  );
};

export default BasisDetail2;
