import React from 'react';
import ReactEcharts from 'echarts-for-react';

const labelOption = {
  show: true,
  position: 'insideBottom',
  distance: 15,
  align: 'left',
  verticalAlign: 'middle',
  rotate: 90,
  formatter: '{c}  {name|{a}}',
  fontSize: 12,
  rich: {
    name: {},
  },
};

const EchartsRotationLabelBar: React.FC = () => {
  const getOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
    },
    /* toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    }, */
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['2012', '2013', '2014', '2015', '2016'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Forest',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 301, 334, 390],
      },
      {
        name: 'Steppe',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290],
      },
      {
        name: 'Desert',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190],
      },
      {
        name: 'Wetland',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: [98, 77, 101, 99, 40],
      },
    ],
  };

  return <ReactEcharts option={getOption} style={{ width: '100%', height: '300px' }} />;
};

export default EchartsRotationLabelBar;
