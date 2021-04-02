import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsStackedAreaLine } from '@/pages/Charts/Echarts/services';

interface EchartsStackedAreaLineProps {
  height?: string;
}

interface StackedAreaLineDatas {
  data1: number[];
  data2: number[];
  data3: number[];
  data4: number[];
  data5: number[];
}

const EchartsStackedAreaLine: React.FC<EchartsStackedAreaLineProps> = (props) => {
  const { height } = props;

  const [echartsStackedAreaLineData, setEchartsStakedAreaLineData] = useState(
    {} as StackedAreaLineDatas,
  );

  useEffect(() => {
    queryEchartsStackedAreaLine().then(({ data }) => setEchartsStakedAreaLineData(data || []));
  }, []);

  const getOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985',
        },
      },
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedAreaLineData.data1,
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedAreaLineData.data2,
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedAreaLineData.data3,
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedAreaLineData.data4,
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        label: {
          show: true,
          position: 'top',
        },
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedAreaLineData.data5,
      },
    ],
  };

  return (
    <Skeleton
      active
      round
      loading={echartsStackedAreaLineData && Object.keys(echartsStackedAreaLineData).length === 0}
    >
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsStackedAreaLine;
