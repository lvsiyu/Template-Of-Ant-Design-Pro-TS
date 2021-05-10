import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsTwoValueAxesInPolarLine } from '@/pages/Charts/Echarts/services';

interface EchartsTwoValueAxesInPolarLineProps {
  height?: string;
}

const EchartsTwoValueAxesInPolarLine: React.FC<EchartsTwoValueAxesInPolarLineProps> = (props) => {
  const { height } = props;

  const [echartsTwoValueAxesInPolarLineData, setEchartsTwoValueAxesInPolarLineData] = useState([]);

  useEffect(() => {
    queryEchartsTwoValueAxesInPolarLine().then(({ data }) =>
      setEchartsTwoValueAxesInPolarLineData(data || []),
    );
  }, []);

  const getOption = {
    polar: {
      center: ['50%', '54%'],
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    angleAxis: {
      type: 'value',
      startAngle: 0,
    },
    radiusAxis: {
      min: 0,
    },
    series: [
      {
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        showSymbol: false,
        data: echartsTwoValueAxesInPolarLineData,
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsTwoValueAxesInPolarLineData?.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsTwoValueAxesInPolarLine;
