import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsRosePie } from '@/pages/Charts/Echarts/services';

interface RingPieDatas {
  value: number;
  name: string;
}

interface EchartsRosePieProps {
  height?: string;
  radiusData?: number[];
  position?: string[];
}

const EchartsRosePie: React.FC<EchartsRosePieProps> = (props) => {
  const { height, radiusData, position } = props;

  const [echartsRosePieData, setEchartsRosePieData] = useState([] as RingPieDatas[]);

  useEffect(() => {
    queryEchartsRosePie().then(({ data }) => setEchartsRosePieData(data || []));
  }, []);

  const getOption = {
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
    },
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: radiusData || [20, 100],
        center: position || ['35%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data: echartsRosePieData,
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsRosePieData?.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsRosePie;
