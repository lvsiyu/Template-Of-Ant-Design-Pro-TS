import React from 'react';
import { Card, Descriptions } from 'antd';
import type { ProTableDataType } from '../data';

interface ProTableListDescriptionProps {
  data: ProTableDataType[];
}

const ProTableListDescription: React.FC<ProTableListDescriptionProps> = (props) => {
  const { data } = props;
  return (
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
  );
};

export default ProTableListDescription;
