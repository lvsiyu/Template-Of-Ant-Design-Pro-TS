import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import { LineChart } from 'bizcharts';
import { queryBizChartsBasisLine } from '@/pages/Charts/BizCharts/services';

interface BizChartsProps {
  height: number;
}

const BasisLine: React.FC<BizChartsProps> = (props) => {
  const { height } = props;

  const [bizChartsBasisLineData, setBizChartsBasisLineData] = useState([]);

  useEffect(() => {
    queryBizChartsBasisLine().then(({ data }) => setBizChartsBasisLineData(data || []));
  }, []);

  return (
    /* 由于骨架屏无高度属性，需要用一个容器来撑开高度 */
    <div style={{ height }}>
      <Skeleton
        active
        round
        loading={bizChartsBasisLineData && bizChartsBasisLineData.length === 0}
      >
        <LineChart data={bizChartsBasisLineData} height={height} xField="year" yField="value" />
      </Skeleton>
    </div>
  );
};

export default BasisLine;
