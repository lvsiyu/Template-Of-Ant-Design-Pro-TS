import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import { RadarChart } from 'bizcharts';
import { queryBizChartsBasisRadar } from '@/pages/Charts/BizCharts/services';

interface BizChartsProps {
  height: number;
}

const BasisRadar: React.FC<BizChartsProps> = (props) => {
  const { height } = props;

  const [bizChartsBasisRadarData, setBizChartsBasisRadarData] = useState([]);

  useEffect(() => {
    queryBizChartsBasisRadar().then(({ data }) => setBizChartsBasisRadarData(data || []));
  }, []);

  return (
    <Skeleton
      active
      round
      loading={bizChartsBasisRadarData && bizChartsBasisRadarData.length === 0}
    >
      <RadarChart
        data={bizChartsBasisRadarData}
        angleField="item"
        radiusField="score"
        seriesField="user"
        xField="year"
        yField="value"
        height={height}
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
    </Skeleton>
  );
};

export default BasisRadar;
