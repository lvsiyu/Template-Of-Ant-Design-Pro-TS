import React from 'react';
import ReactEcharts from 'echarts-for-react';

const EchartsRoundedBar: React.FC = () => {
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
        data: [4, 3, 2, 1, 0],
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
        data: [4, 3, 2, 1, 0],
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

  return <ReactEcharts option={getOption} style={{ width: '100%', height: '300px' }} />;
};

export default EchartsRoundedBar;
