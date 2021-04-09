import React from 'react';
import { WordCloud } from '@ant-design/charts';
import type { WordCloudConfig } from '@ant-design/charts/es/wordCloud/index.d';

const BasisWord: React.FC = () => {
  const data = [
    {
      x: 'China',
      value: 10,
      category: 'asia',
    },
    {
      x: 'India',
      value: 9,
      category: 'asia',
    },
    {
      x: 'United States',
      value: 8,
      category: 'america',
    },
    {
      x: 'Indonesia',
      value: 7,
      category: 'asia',
    },
    {
      x: 'Brazil',
      value: 6,
      category: 'america',
    },
    {
      x: 'Pakistan',
      value: 6,
      category: 'asia',
    },
    {
      x: 'Nigeria',
      value: 5,
      category: 'africa',
    },
    {
      x: 'Bangladesh',
      value: 4,
      category: 'asia',
    },
    {
      x: 'Russia',
      value: 3,
      category: 'europe',
    },
  ];

  const config: WordCloudConfig = {
    data,
    height: 190,
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
  return <WordCloud {...config} />;
};

export default BasisWord;
