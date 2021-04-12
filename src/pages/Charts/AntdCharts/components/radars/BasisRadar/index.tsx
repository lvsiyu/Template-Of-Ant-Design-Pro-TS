import React, { useState, useEffect } from 'react';
import { Radar } from '@ant-design/charts';
import { queryAntdChartsBasisRadar } from '@/pages/Charts/AntdCharts/services';

interface BasisRadarProps {
  height?: number;
}

interface ResponseData {
  name: string;
  star: number;
}

const BasisRadar: React.FC<BasisRadarProps> = (props) => {
  const { height } = props;

  const [antdChartsBasisRadarData, setAntdChartsBasisRadarData] = useState([] as ResponseData[]);

  useEffect(() => {
    queryAntdChartsBasisRadar().then(({ data }) => setAntdChartsBasisRadarData(data || []));
  }, []);

  const config = {
    data: antdChartsBasisRadarData.map((d) => ({ ...d, star: Math.log(d.star).toFixed(2) })),
    height: height || 190,
    xField: 'name',
    yField: 'star',
    meta: {
      star: {
        alias: '分数',
        min: 0,
        nice: true,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启辅助点
    point: {},
    area: {},
  };
  return (
    <Radar
      {...config}
      loading={antdChartsBasisRadarData && antdChartsBasisRadarData.length === 0}
    />
  );
};

export default BasisRadar;
