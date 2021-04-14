import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import { LineChart } from 'bizcharts';
import { queryBizChartsBasisLine } from '@/pages/Charts/BizCharts/services';

export interface BizChartsProps {
  height: number;
}

const BasisLine: React.FC<BizChartsProps> = (props) => {
  const { height } = props;

  const [bizChartsBasisLineData, setBizChartsBasisLineData] = useState([]);

  useEffect(() => {
    queryBizChartsBasisLine().then(({ data }) => setBizChartsBasisLineData(data || []));
  }, []);

  return (
    <Skeleton active round loading={bizChartsBasisLineData && bizChartsBasisLineData.length === 0}>
      <LineChart data={bizChartsBasisLineData} height={height} xField="year" yField="value" />
    </Skeleton>
  );
};

export default BasisLine;
