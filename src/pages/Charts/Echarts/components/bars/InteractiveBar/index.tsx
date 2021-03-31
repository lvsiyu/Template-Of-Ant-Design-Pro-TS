import React from 'react';
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';

const dataAxis = [
  '点',
  '击',
  '柱',
  '子',
  '或',
  '者',
  '两',
  '指',
  '在',
  '触',
  '屏',
  '上',
  '滑',
  '动',
  '能',
  '够',
  '自',
  '动',
  '缩',
  '放',
];
const data = [
  220,
  182,
  191,
  234,
  290,
  330,
  310,
  123,
  442,
  321,
  90,
  149,
  210,
  122,
  133,
  334,
  198,
  123,
  125,
  220,
];
const yMax = 500;
const dataShadow = [];

for (let i = 0; i < data.length; i += 1) {
  dataShadow.push(yMax);
}

const EchartsInteractiveBar: React.FC<ReactEcharts> = () => {
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
      data: dataAxis,
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
        data,
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
      startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
    });
  };

  return (
    <ReactEcharts
      option={getOption}
      onEvents={{
        click: onChartClick,
      }}
      style={{ width: '100%', height: '300px' }}
    />
  );
};

export default EchartsInteractiveBar;
