import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsBasisPie } from '@/pages/Charts/Echarts/services';

interface BasisPieDatas {
  value: number;
  name: string;
}

interface EchartsBasisPieProps {
  height?: string;
}

const EchartsBasisPie: React.FC<EchartsBasisPieProps> = (props) => {
  const { height } = props;

  const [echartsBasisPieData, setEchartsBasisPieData] = useState([] as BasisPieDatas[]);

  useEffect(() => {
    queryEchartsBasisPie().then(({ data }) => setEchartsBasisPieData(data || []));
  }, []);

  const getOption = {
    /* title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    }, */
    legend: {
      /* orient: 'vertical', */
      left: 'center',
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data: echartsBasisPieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsBasisPieData?.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsBasisPie;
