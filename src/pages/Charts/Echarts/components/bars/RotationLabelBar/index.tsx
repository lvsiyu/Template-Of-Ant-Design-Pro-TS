import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsRotationLabelBar } from '@/pages/Charts/Echarts/services';

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

interface RotationLabelBarDatas {
  data1: number[];
  data2: number[];
  data3: number[];
  data4: number[];
}

interface EchartsRotationLabelBarProps {
  height?: string;
}

const EchartsRotationLabelBar: React.FC<EchartsRotationLabelBarProps> = (props) => {
  const { height } = props;

  const [echartsRotationLabelBarData, setEchartsRotationLabelBarData] = useState(
    {} as RotationLabelBarDatas,
  );

  useEffect(() => {
    queryEchartsRotationLabelBar().then(({ data }) => setEchartsRotationLabelBarData(data || []));
  }, []);

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
        data: echartsRotationLabelBarData.data1,
      },
      {
        name: 'Steppe',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: echartsRotationLabelBarData.data2,
      },
      {
        name: 'Desert',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: echartsRotationLabelBarData.data3,
      },
      {
        name: 'Wetland',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series',
        },
        data: echartsRotationLabelBarData.data4,
      },
    ],
  };

  return (
    <Skeleton
      active
      round
      loading={echartsRotationLabelBarData && Object.keys(echartsRotationLabelBarData).length === 0}
    >
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsRotationLabelBar;
