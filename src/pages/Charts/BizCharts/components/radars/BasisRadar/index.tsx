import React from 'react';
import { RadarChart } from 'bizcharts';

// 数据源
const data = [
  { value: 'Design', user: 'a', score: 70 },
  { value: 'Design', user: 'b', score: 30 },
  { value: 'Development', user: 'a', score: 60 },
  { value: 'Development', user: 'b', score: 70 },
  { value: 'Marketing', user: 'a', score: 60 },
  { value: 'Marketing', user: 'b', score: 50 },
  { value: 'Users', user: 'a', score: 40 },
  { value: 'Users', user: 'b', score: 50 },
  { value: 'Test', user: 'a', score: 60 },
  { value: 'Test', user: 'b', score: 70 },
  { value: 'Language', user: 'a', score: 70 },
  { value: 'Language', user: 'b', score: 50 },
  { value: 'Technology', user: 'a', score: 50 },
  { value: 'Technology', user: 'b', score: 40 },
  { value: 'Support', user: 'a', score: 30 },
  { value: 'Support', user: 'b', score: 40 },
  { value: 'Sales', user: 'a', score: 60 },
  { value: 'Sales', user: 'b', score: 40 },
  { value: 'UX', user: 'a', score: 50 },
  { value: 'UX', user: 'b', score: 60 },
];

const BasisRadar: React.FC = () => {
  return (
    <RadarChart
      data={data}
      angleField="item"
      radiusField="score"
      seriesField="user"
      xField="year"
      yField="value"
      height={200}
      radiusAxis={{
        grid: {
          line: {
            type: 'line',
          },
        },
      }}
      line={{
        visible: true,
      }}
      point={{
        visible: false,
        /* shape: 'circle', */
      }}
      legend={{
        visible: false,
      }}
    />
  );
};

export default BasisRadar;
