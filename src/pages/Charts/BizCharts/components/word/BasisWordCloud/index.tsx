import React from 'react';
import { WordCloudChart } from 'bizcharts';

// 数据源
const data = [
  { value: 12, name: 'G2Plot' },
  { value: 9, name: 'AntV' },
  { value: 8, name: 'F2' },
  { value: 8, name: 'G2' },
  { value: 8, name: 'G6' },
  { value: 8, name: 'DataSet' },
  { value: 6, name: 'Analysis' },
  { value: 6, name: 'Data Mining' },
  { value: 6, name: 'Data Vis' },
  { value: 6, name: 'Design' },
  { value: 6, name: 'Grammar' },
  { value: 6, name: 'Graphics' },
  { value: 6, name: 'Graph' },
  { value: 6, name: 'Hierarchy' },
  { value: 6, name: 'Labeling' },
  { value: 6, name: 'Layout' },
  { value: 6, name: 'Quantitative' },
  { value: 6, name: 'Relation' },
  { value: 4, name: 'Arc Diagram' },
  { value: 4, name: 'Bar Chart' },
  { value: 4, name: 'Canvas' },
  { value: 4, name: 'Chart' },
  { value: 4, name: 'DAG' },
  { value: 4, name: 'DG' },
  { value: 4, name: 'Facet' },
  { value: 4, name: 'Geo' },
];

const getDataList = (listData: any[]) => {
  const list: { word: string; weight: number; id: number }[] = [];
  // change data type
  listData.forEach((d: { name: any; value: any }) => {
    list.push({
      word: d.name,
      weight: d.value,
      id: list.length,
    });
  });
  return list;
};

const BasisWordCloud: React.FC = () => {
  return (
    <WordCloudChart
      data={getDataList(data)}
      wordStyle={{
        fontSize: [10, 60],
        active: {
          shadowColor: '#333333',
          shadowBlur: 10,
        },
      }}
      height={200}
      shuffle={false}
      tooltip={{
        visible: true,
      }}
      selected={-1}
    />
  );
};

export default BasisWordCloud;
