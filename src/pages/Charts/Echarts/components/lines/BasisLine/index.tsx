import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsBasisLine } from '@/pages/Charts/Echarts/services';

interface EchartsBasisLineProps {
  height?: string;
}

const EchartsBasisLine: React.FC<EchartsBasisLineProps> = (props) => {
  const { height } = props;

  const [echartsBasisLineData, setEchartsBasisLineData] = useState([]);

  useEffect(() => {
    queryEchartsBasisLine().then(({ data }) => setEchartsBasisLineData(data || []));
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
        data: echartsBasisLineData,
        type: 'line',
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsBasisLineData?.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsBasisLine;
