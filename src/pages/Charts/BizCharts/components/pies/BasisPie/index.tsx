import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import { PieChart } from 'bizcharts';
import { queryBizChartsBasisPie } from '@/pages/Charts/BizCharts/services';

interface BizChartsProps {
  height: number;
}

const BasisPie: React.FC<BizChartsProps> = (props) => {
  const { height } = props;

  const [bizChartsBasisPieData, setBizChartsBasisPieData] = useState([]);

  useEffect(() => {
    queryBizChartsBasisPie().then(({ data }) => setBizChartsBasisPieData(data || []));
  }, []);

  return (
    <Skeleton active round loading={bizChartsBasisPieData && bizChartsBasisPieData.length === 0}>
      <PieChart
        data={bizChartsBasisPieData}
        radius={0.8}
        height={height}
        angleField="value"
        colorField="type"
        label={{
          visible: true,
          type: 'outer',
          offset: 20,
        }}
      />
    </Skeleton>
  );
};

export default BasisPie;
