import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import { ColumnChart } from 'bizcharts';
import { queryBizChartsBasisColumn } from '@/pages/Charts/BizCharts/services';

interface BizChartsProps {
  height: number;
}

const BasisColumn: React.FC<BizChartsProps> = (props) => {
  const { height } = props;

  const [bizChartsBasisColumnData, setBizChartsBasisColumnData] = useState([]);

  useEffect(() => {
    queryBizChartsBasisColumn().then(({ data }) => setBizChartsBasisColumnData(data || []));
  }, []);

  return (
    <Skeleton
      active
      round
      loading={bizChartsBasisColumnData && bizChartsBasisColumnData.length === 0}
    >
      <ColumnChart
        data={bizChartsBasisColumnData}
        autoFit
        height={height}
        padding="auto"
        xField="type"
        yField="sales"
        meta={{
          type: {
            alias: '类别',
          },
          sales: {
            alias: '销售额(万)',
          },
        }}
      />
    </Skeleton>
  );
};

export default BasisColumn;
