import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import { BarChart } from 'bizcharts';
import { queryBizChartsBasisBar } from '@/pages/Charts/BizCharts/services';

interface BizChartsProps {
  height: number;
}

const BasisBar: React.FC<BizChartsProps> = (props) => {
  const { height } = props;

  const [bizChartsBasisBarData, setBizChartsBasisBarData] = useState([]);

  useEffect(() => {
    queryBizChartsBasisBar().then(({ data }) => setBizChartsBasisBarData(data || []));
  }, []);

  return (
    <Skeleton active round loading={bizChartsBasisBarData && bizChartsBasisBarData.length === 0}>
      <BarChart
        data={bizChartsBasisBarData}
        autoFit
        xField="销售额"
        yField="地区"
        height={height}
      />
    </Skeleton>
  );
};

export default BasisBar;
