import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsRounderBar } from '@/pages/Charts/Echarts/services';

interface RounderBarDatas {
  data1: number[];
  data2: number[];
}

interface EchartsRoundedBarProps {
  height?: string;
}

const EchartsRoundedBar: React.FC<EchartsRoundedBarProps> = (props) => {
  const { height } = props;

  const [echartsRounderBarData, setEchartsRounderBarData] = useState({} as RounderBarDatas);

  useEffect(() => {
    queryEchartsRounderBar().then(({ data }) => setEchartsRounderBarData(data || []));
  }, []);

  const getOption = {
    angleAxis: {
      max: 2,
      startAngle: 30,
      splitLine: {
        show: false,
      },
    },
    radiusAxis: {
      type: 'category',
      data: ['v', 'w', 'x', 'y', 'z'],
      z: 10,
    },
    polar: {},
    series: [
      {
        type: 'bar',
        data: echartsRounderBarData.data1,
        coordinateSystem: 'polar',
        name: 'Without Round Cap',
        itemStyle: {
          borderColor: 'red',
          opacity: 0.8,
          borderWidth: 1,
        },
      },
      {
        type: 'bar',
        data: echartsRounderBarData.data1,
        coordinateSystem: 'polar',
        name: 'With Round Cap',
        roundCap: true,
        itemStyle: {
          borderColor: 'green',
          opacity: 0.8,
          borderWidth: 1,
        },
      },
    ],
    legend: {
      show: true,
      data: ['Without Round Cap', 'With Round Cap'],
    },
  };

  return (
    <Skeleton
      active
      round
      loading={echartsRounderBarData && Object.keys(echartsRounderBarData).length === 0}
    >
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsRoundedBar;
