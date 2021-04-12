import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import { queryAntdChartsBasisLine } from '@/pages/Charts/AntdCharts/services';

interface BasisLineProps {
  height?: number;
}

const BasisLine: React.FC<BasisLineProps> = (props) => {
  const { height } = props;

  const [antdChartsBasisLineData, setAntdChartsBasisLineData] = useState([]);

  useEffect(() => {
    queryAntdChartsBasisLine().then(({ data }) => setAntdChartsBasisLineData(data || []));
  }, []);

  const config = {
    data: antdChartsBasisLineData,
    xField: 'year',
    yField: 'value',
    label: {},
    height: height || 461,
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: { showMarkers: false },
    state: {
      active: {
        style: {
          shadowColor: 'yellow',
          shadowBlur: 4,
          stroke: 'transparent',
          fill: 'red',
        },
      },
    },
    theme: {
      geometries: {
        point: {
          diamond: {
            active: {
              style: {
                shadowColor: '#FCEBB9',
                shadowBlur: 2,
                stroke: '#F6BD16',
              },
            },
          },
        },
      },
    },
    interactions: [{ type: 'marker-active' }],
  };
  return (
    <Line {...config} loading={antdChartsBasisLineData && antdChartsBasisLineData.length === 0} />
  );
};

export default BasisLine;
