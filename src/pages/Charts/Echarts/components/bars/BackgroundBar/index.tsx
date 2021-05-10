import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsBackgroundBar } from '@/pages/Charts/Echarts/services';

interface EchartsBackgroundBarProps {
  height?: string;
}

const EchartsBackgroundBar: React.FC<EchartsBackgroundBarProps> = (props) => {
  const { height } = props;

  const [echartsBackgroundBarData, setEchartsBackgroundBarData] = useState([]);

  useEffect(() => {
    queryEchartsBackgroundBar().then(({ data }) => setEchartsBackgroundBarData(data || []));
  }, []);

  const getOption = {
    title: {
      text: '特性示例：背景拥有浅色覆盖',
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
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: echartsBackgroundBarData,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsBackgroundBarData?.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsBackgroundBar;
