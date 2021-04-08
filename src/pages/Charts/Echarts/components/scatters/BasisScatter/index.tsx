import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsBasisScatter } from '@/pages/Charts/Echarts/services';

interface BasisPieDatas {
  height?: string;
}

const EchartsBasisScatter: React.FC<BasisPieDatas> = (props) => {
  const { height } = props;

  const [echartsBasisScatterData, setEchartsBasisScatterData] = useState([] as BasisPieDatas[]);

  useEffect(() => {
    queryEchartsBasisScatter().then(({ data }) => setEchartsBasisScatterData(data || []));
  }, []);

  const getOption = {
    xAxis: {},
    yAxis: {},
    series: [
      {
        symbolSize: 20,
        data: echartsBasisScatterData,
        type: 'scatter',
      },
    ],
  };

  return (
    <Skeleton
      active
      round
      loading={echartsBasisScatterData && echartsBasisScatterData.length === 0}
    >
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsBasisScatter;
