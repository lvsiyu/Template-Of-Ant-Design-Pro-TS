import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';
import { queryAntdChartsBasisBar } from '@/pages/Charts/AntdCharts/services';
import type { BarConfig } from '@ant-design/charts/es/bar/index.d';

interface BasisBarProps {
  height?: number;
}

const BasisBar: React.FC<BasisBarProps> = (props) => {
  const { height } = props;

  const [antdChartsBasisBarData, setAntdChartsBasisBarData] = useState([]);

  useEffect(() => {
    queryAntdChartsBasisBar().then(({ data }) => setAntdChartsBasisBarData(data || []));
  }, []);

  const config: BarConfig = {
    data: antdChartsBasisBarData,
    height: height || 190,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: { position: 'top-left' },
  };
  return (
    <Bar {...config} loading={antdChartsBasisBarData && antdChartsBasisBarData.length === 0} />
  );
};

export default BasisBar;
