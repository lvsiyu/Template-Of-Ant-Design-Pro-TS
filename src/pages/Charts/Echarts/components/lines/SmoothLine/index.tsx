import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsSmoothLine } from '@/pages/Charts/Echarts/services';

const EchartsSmoothLine: React.FC = () => {
  const [echartsSmoothLineData, setEchartsSmoothLineData] = useState([]);

  useEffect(() => {
    queryEchartsSmoothLine().then(({ data }) => setEchartsSmoothLineData(data || []));
  }, []);

  const getOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: echartsSmoothLineData,
        type: 'line',
        smooth: true,
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsSmoothLineData && echartsSmoothLineData.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: '300px' }} />
    </Skeleton>
  );
};

export default EchartsSmoothLine;
