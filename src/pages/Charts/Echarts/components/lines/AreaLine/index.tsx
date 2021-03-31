import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsAreaLine } from '@/pages/Charts/Echarts/services';

const EchartsAreaLine: React.FC = () => {
  const [echartsAreaLineData, setEchartsAreaLineData] = useState([]);

  useEffect(() => {
    queryEchartsAreaLine().then(({ data }) => setEchartsAreaLineData(data || []));
  }, []);

  const getOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: echartsAreaLineData,
        type: 'line',
        areaStyle: {},
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsAreaLineData && echartsAreaLineData.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: '300px' }} />
    </Skeleton>
  );
};

export default EchartsAreaLine;
