import React, { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/charts';
import { queryAntdChartsBasisWord } from '@/pages/Charts/AntdCharts/services';
import type { WordCloudConfig } from '@ant-design/charts/es/wordCloud/index.d';

interface BasisWordProps {
  height?: number;
}

const BasisWord: React.FC<BasisWordProps> = (props) => {
  const { height } = props;

  const [antdChartsBasisWordData, setAntdChartsBasisWordData] = useState([]);

  useEffect(() => {
    queryAntdChartsBasisWord().then(({ data }) => setAntdChartsBasisWordData(data || []));
  }, []);

  const config: WordCloudConfig = {
    data: antdChartsBasisWordData,
    height: height || 190,
    wordField: 'x',
    weightField: 'value',
    color: '#122c6a',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [24, 50],
    },
    interactions: [{ type: 'element-active' }],
    state: { active: { style: { lineWidth: 3 } } },
  };
  return (
    <WordCloud
      {...config}
      loading={antdChartsBasisWordData && antdChartsBasisWordData.length === 0}
    />
  );
};

export default BasisWord;
