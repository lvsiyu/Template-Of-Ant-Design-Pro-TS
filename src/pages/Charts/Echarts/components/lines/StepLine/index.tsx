import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsStepLine } from '@/pages/Charts/Echarts/services';

interface EchartsStepLineProps {
  height?: string;
}

interface StepLineDatas {
  data1: number[];
  data2: number[];
  data3: number[];
}

const EchartsStepLine: React.FC<EchartsStepLineProps> = (props) => {
  const { height } = props;

  const [echartsStepLineData, setEchartsStepLineData] = useState({} as StepLineDatas);

  useEffect(() => {
    queryEchartsStepLine().then(({ data }) => setEchartsStepLineData(data || []));
  }, []);

  const getOption = {
    legend: {
      data: ['Step Start', 'Step Middle', 'Step End'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    /* toolbox: {
      feature: {
        saveAsImage: {},
      },
    }, */
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Step Start',
        type: 'line',
        step: 'start',
        data: echartsStepLineData.data1,
      },
      {
        name: 'Step Middle',
        type: 'line',
        step: 'middle',
        data: echartsStepLineData.data2,
      },
      {
        name: 'Step End',
        type: 'line',
        step: 'end',
        data: echartsStepLineData.data3,
      },
    ],
  };

  return (
    <Skeleton
      active
      round
      loading={echartsStepLineData && Object.keys(echartsStepLineData).length === 0}
    >
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsStepLine;
