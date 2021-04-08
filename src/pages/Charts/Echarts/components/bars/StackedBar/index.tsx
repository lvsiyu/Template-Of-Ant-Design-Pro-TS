import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsStackedBar } from '@/pages/Charts/Echarts/services';

interface StackedBarDatas {
  data1: number[];
  data2: number[];
  data3: number[];
  data4: number[];
  data5: number[];
  data6: number[];
  data7: number[];
  data8: number[];
  data9: number[];
}

interface EchartsStackedBarProps {
  height?: string;
}

const EchartsStackedBar: React.FC<EchartsStackedBarProps> = (props) => {
  const { height } = props;

  const [echartsStackedBarData, setEchartsStackedBarData] = useState({} as StackedBarDatas);

  useEffect(() => {
    queryEchartsStackedBar().then(({ data }) => setEchartsStackedBarData(data || []));
  }, []);

  const getOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      data: [
        '直接访问',
        '邮件营销',
        '联盟广告',
        '视频广告',
        '搜索引擎',
        '百度',
        '谷歌',
        '必应',
        '其他',
      ],
    },
    /* grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    }, */
    xAxis: [
      {
        type: 'category',
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
        name: '直接访问',
        type: 'bar',
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedBarData.data1,
      },
      {
        name: '邮件营销',
        type: 'bar',
        stack: '广告',
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedBarData.data2,
      },
      {
        name: '联盟广告',
        type: 'bar',
        stack: '广告',
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedBarData.data3,
      },
      {
        name: '视频广告',
        type: 'bar',
        stack: '广告',
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedBarData.data4,
      },
      {
        name: '搜索引擎',
        type: 'bar',
        data: echartsStackedBarData.data5,
        emphasis: {
          focus: 'series',
        },
        markLine: {
          lineStyle: {
            type: 'dashed',
          },
          data: [[{ type: 'min' }, { type: 'max' }]],
        },
      },
      {
        name: '百度',
        type: 'bar',
        barWidth: 5,
        stack: '搜索引擎',
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedBarData.data6,
      },
      {
        name: '谷歌',
        type: 'bar',
        stack: '搜索引擎',
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedBarData.data7,
      },
      {
        name: '必应',
        type: 'bar',
        stack: '搜索引擎',
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedBarData.data8,
      },
      {
        name: '其他',
        type: 'bar',
        stack: '搜索引擎',
        emphasis: {
          focus: 'series',
        },
        data: echartsStackedBarData.data9,
      },
    ],
  };

  return (
    <Skeleton
      active
      round
      loading={echartsStackedBarData && Object.keys(echartsStackedBarData).length === 0}
    >
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsStackedBar;
