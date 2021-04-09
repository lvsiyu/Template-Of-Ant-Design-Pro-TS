import React from 'react';
import { Bar } from '@ant-design/charts';
import type { BarConfig } from '@ant-design/charts/es/bar/index.d';

const BasisBar: React.FC = () => {
  const data = [
    {
      year: '1951 年',
      value: 38,
    },
    {
      year: '1952 年',
      value: 52,
    },
    {
      year: '1956 年',
      value: 61,
    },
    {
      year: '1957 年',
      value: 145,
    },
    {
      year: '1958 年',
      value: 48,
    },
  ];
  const config: BarConfig = {
    data,
    height: 190,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};

export default BasisBar;
