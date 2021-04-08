import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsInteractiveBar } from '@/pages/Charts/Echarts/services';

interface InteractiveBarDatas {
  data1: string[];
  data2: number[];
}

interface EchartsInteractiveBarProps {
  height?: string;
}

const EchartsInteractiveBar: React.FC<EchartsInteractiveBarProps> = (props) => {
  const { height } = props;

  const [echartsInteractiveBarData, setEchartsInteractiveBarData] = useState(
    {} as InteractiveBarDatas,
  );

  useEffect(() => {
    queryEchartsInteractiveBar().then(({ data }) => setEchartsInteractiveBarData(data || []));
  }, []);

  const getOption = {
    title: {
      text: '特性示例：渐变色 阴影 点击缩放',
      subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
    },
    /* tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    }, */
    xAxis: {
      data: echartsInteractiveBarData.data1,
      axisLabel: {
        inside: true,
        textStyle: {
          color: '#fff',
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      z: 10,
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#999',
        },
      },
    },
    dataZoom: [
      {
        type: 'inside',
      },
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' },
            ]),
          },
        },
        data: echartsInteractiveBarData.data2,
      },
    ],
  };

  const zoomSize = 6;
  const onChartClick = (
    params: { dataIndex: number },
    chart: {
      dispatchAction: (arg0: { type: string; startValue: string; endValue: string }) => void;
    },
  ) => {
    chart.dispatchAction({
      type: 'dataZoom',
      startValue: echartsInteractiveBarData.data1[Math.max(params.dataIndex - zoomSize / 2, 0)],
      endValue:
        echartsInteractiveBarData.data1[
          Math.min(params.dataIndex + zoomSize / 2, echartsInteractiveBarData.data2.length - 1)
        ],
    });
  };

  return (
    <Skeleton
      active
      round
      loading={echartsInteractiveBarData && Object.keys(echartsInteractiveBarData).length === 0}
    >
      <ReactEcharts
        option={getOption}
        onEvents={{
          click: onChartClick,
        }}
        style={{ width: '100%', height: height || '300px' }}
      />
    </Skeleton>
  );
};

export default EchartsInteractiveBar;
