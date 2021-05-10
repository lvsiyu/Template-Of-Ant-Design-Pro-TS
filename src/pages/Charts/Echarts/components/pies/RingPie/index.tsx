import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsRingPie } from '@/pages/Charts/Echarts/services';

interface RingPieDatas {
  value: number;
  name: string;
}

interface EchartsRingPieProps {
  height?: string;
}

const EchartsRingPie: React.FC<EchartsRingPieProps> = (props) => {
  const { height } = props;

  const [echartsRingPieData, setEchartsRingPieData] = useState([] as RingPieDatas[]);

  useEffect(() => {
    queryEchartsRingPie().then(({ data }) => setEchartsRingPieData(data || []));
  }, []);

  const getOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: echartsRingPieData,
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsRingPieData?.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsRingPie;
