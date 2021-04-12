import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';
import { queryAntdChartsBasisColumn } from '@/pages/Charts/AntdCharts/services';
import type { ColumnConfig } from '@ant-design/charts/es/column/index.d';

interface BasisColumnProps {
  height?: number;
}

const BasisColumn: React.FC<BasisColumnProps> = (props) => {
  const { height } = props;

  const [antdChartsBasisColumnData, setAntdChartsBasisColumnData] = useState([]);

  useEffect(() => {
    queryAntdChartsBasisColumn().then(({ data }) => setAntdChartsBasisColumnData(data || []));
  }, []);

  const config: ColumnConfig = {
    data: antdChartsBasisColumnData,
    xField: 'type',
    yField: 'sales',
    height: height || 180,
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额' },
    },
  };
  return (
    <Column
      {...config}
      loading={antdChartsBasisColumnData && antdChartsBasisColumnData.length === 0}
    />
  );
};

export default BasisColumn;
