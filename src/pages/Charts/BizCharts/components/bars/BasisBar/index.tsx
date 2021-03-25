import React from 'react';
import { BarChart } from 'bizcharts';

// 数据源
const data = [
  { 地区: '华东', 销售额: 4684506.442 },
  { 地区: '中南', 销售额: 4137415.0929999948 },
  { 地区: '东北', 销售额: 2681567.469000001 },
  { 地区: '华北', 销售额: 2447301.017000004 },
  { 地区: '西南', 销售额: 1303124.508000002 },
  { 地区: '西北', 销售额: 815039.5959999998 },
];

const BasisColumn: React.FC = () => {
  return <BarChart data={data} autoFit xField="销售额" yField="地区" height={200} />;
};

export default BasisColumn;
