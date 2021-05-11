import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsAnimateScatter } from '@/pages/Charts/Echarts/services';

interface AnimateScatterDatas {
  height?: string;
}

const EchartsAnimateScatter: React.FC<AnimateScatterDatas> = (props) => {
  const { height } = props;

  const [echartsAnimateScatterData, setEchartsAnimateScatterData] = useState(
    [] as AnimateScatterDatas[],
  );

  useEffect(() => {
    queryEchartsAnimateScatter().then(({ data }) => setEchartsAnimateScatterData(data || []));
  }, []);

  const getOption = {
    xAxis: {
      scale: true,
    },
    yAxis: {
      scale: true,
    },
    series: [
      {
        type: 'effectScatter',
        symbolSize: 10,
        data: [
          [172.7, 105.2],
          [153.4, 42],
        ],
      },
      {
        type: 'scatter',
        data: echartsAnimateScatterData,
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsAnimateScatterData?.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsAnimateScatter;
