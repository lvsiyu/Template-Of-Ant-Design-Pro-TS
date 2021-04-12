import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';
import { queryAntdChartsBasisPie } from '@/pages/Charts/AntdCharts/services';

interface BasisPieProps {
  height?: number;
}

const BasisPie: React.FC<BasisPieProps> = (props) => {
  const { height } = props;

  const [antdChartsBasisPieData, setAntdChartsBasisPieData] = useState([]);

  useEffect(() => {
    queryAntdChartsBasisPie().then(({ data }) => setAntdChartsBasisPieData(data || []));
  }, []);

  const config = {
    appendPadding: 10,
    height: height || 180,
    data: antdChartsBasisPieData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
  };
  return (
    <Pie {...config} loading={antdChartsBasisPieData && antdChartsBasisPieData.length === 0} />
  );
};

export default BasisPie;
