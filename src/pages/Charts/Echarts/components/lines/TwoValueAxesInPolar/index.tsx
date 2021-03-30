import React from 'react';
import ReactEcharts from 'echarts-for-react';

const data: number[][] = [];

for (let i = 0; i <= 360; i += 1) {
  const t = (i / 180) * Math.PI;
  const r = Math.sin(2 * t) * Math.cos(2 * t);
  data.push([r, i]);
}

const EchartsTwoValueAxesInPolarLine: React.FC = () => {
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
        data,
      },
    ],
  };

  return <ReactEcharts option={getOption} style={{ width: '100%', height: '300px' }} />;
};

export default EchartsTwoValueAxesInPolarLine;
