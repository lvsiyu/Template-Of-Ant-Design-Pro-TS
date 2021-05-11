import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsBasisScatter } from '@/pages/Charts/Echarts/services';

interface BasisScatterDatas {
  height?: string;
}

const EchartsBasisScatter: React.FC<BasisScatterDatas> = (props) => {
  const { height } = props;

  const [echartsBasisScatterData, setEchartsBasisScatterData] = useState([] as BasisScatterDatas[]);

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
    <Skeleton active round loading={echartsBasisScatterData?.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsBasisScatter;
