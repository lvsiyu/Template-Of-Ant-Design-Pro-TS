import React from 'react';
import { PieChart } from 'bizcharts';

// 数据源
const data = [
  { type: '分类一', value: 27 },
  { type: '分类二', value: 25 },
  { type: '分类三', value: 18 },
  { type: '分类四', value: 15 },
  { type: '分类五', value: 10 },
  { type: '其它', value: 5 },
];

const BasisPie: React.FC = () => {
  return (
    <PieChart
      data={data}
      radius={0.8}
      height={180}
      angleField="value"
      colorField="type"
      label={{
        visible: true,
        type: 'outer',
        offset: 20,
      }}
    />
  );
};

export default BasisPie;
