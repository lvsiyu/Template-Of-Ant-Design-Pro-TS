import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsNestedPie } from '@/pages/Charts/Echarts/services';

interface BasisPieDatas {
  value: number;
  name: string;
}

interface EchartsNestedPieProps {
  height?: string;
}

const EchartsNestedPie: React.FC<EchartsNestedPieProps> = (props) => {
  const { height } = props;

  const [echartsNestedPieData, setEchartsNestedPieData] = useState([] as BasisPieDatas[]);

  useEffect(() => {
    queryEchartsNestedPie().then(({ data }) => setEchartsNestedPieData(data || []));
  }, []);

  const getOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      data: [
        '直达',
        '营销广告',
        '搜索引擎',
        '邮件营销',
        '联盟广告',
        '视频广告',
        '百度',
        '谷歌',
        '必应',
        '其他',
      ],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
          position: 'inner',
          fontSize: 12,
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1548, name: '搜索引擎' },
          { value: 775, name: '直达' },
          { value: 679, name: '营销广告', selected: true },
        ],
      },
      {
        name: '访问来源',
        type: 'pie',
        radius: ['45%', '60%'],
        labelLine: {
          length: 30,
        },
        label: {
          formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
          backgroundColor: '#F6F8FC',
          borderColor: '#8C8D8E',
          borderWidth: 1,
          borderRadius: 4,

          rich: {
            a: {
              color: '#6E7079',
              lineHeight: 22,
              align: 'center',
            },
            hr: {
              borderColor: '#8C8D8E',
              width: '100%',
              borderWidth: 1,
              height: 0,
            },
            b: {
              color: '#4C5058',
              fontSize: 12,
              fontWeight: 'bold',
              lineHeight: 33,
            },
            per: {
              color: '#fff',
              backgroundColor: '#4C5058',
              padding: [3, 4],
              borderRadius: 4,
            },
          },
        },
        data: echartsNestedPieData,
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsNestedPieData?.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsNestedPie;
