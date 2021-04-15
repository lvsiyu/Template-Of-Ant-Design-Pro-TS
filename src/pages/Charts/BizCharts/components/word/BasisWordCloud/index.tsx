import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import { WordCloudChart } from 'bizcharts';
import { queryBizChartsBasisWord } from '@/pages/Charts/BizCharts/services';

interface BizChartsProps {
  height: number;
}

interface WordListDataType {
  word: string;
  weight: number;
  id: number;
}

const BasisWordCloud: React.FC<BizChartsProps> = (props) => {
  const { height } = props;

  const [bizChartsBasisWordData, setBizChartsBasisWordData] = useState([] as WordListDataType[]);

  const getDataList = (listData: { name: string; value: number }[]) => {
    const list: WordListDataType[] = [];
    // change data type
    listData.forEach((d: { name: any; value: any }) => {
      list.push({
        word: d.name,
        weight: d.value,
        id: list.length,
      });
    });
    setBizChartsBasisWordData(list);
  };

  useEffect(() => {
    queryBizChartsBasisWord().then(({ data }) => getDataList(data || []));
  }, []);

  return (
    <Skeleton active round loading={bizChartsBasisWordData && bizChartsBasisWordData.length === 0}>
      <WordCloudChart
        data={bizChartsBasisWordData}
        wordStyle={{
          fontSize: [10, 60],
          active: {
            shadowColor: '#333333',
            shadowBlur: 10,
          },
        }}
        height={height}
        /* shuffle={false} */
        tooltip={{
          visible: true,
        }}
        selected={-1}
      />
    </Skeleton>
  );
};

export default BasisWordCloud;
