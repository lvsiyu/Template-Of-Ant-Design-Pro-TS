import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsBasisBar } from '@/pages/Charts/Echarts/services';

interface EchartsBasisBarProps {
  height?: string;
}

const EchartsBasisBar: React.FC<EchartsBasisBarProps> = (props) => {
  const { height } = props;

  const [echartsBasisBarData, setEchartsBasisBarData] = useState([]);

  useEffect(() => {
    queryEchartsBasisBar().then(({ data }) => setEchartsBasisBarData(data || []));
  }, []);

  const getOption = {
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
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
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
        barWidth: '60%',
        data: echartsBasisBarData,
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsBasisBarData?.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsBasisBar;
