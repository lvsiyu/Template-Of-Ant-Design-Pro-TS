import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryEchartsTexturePie } from '@/pages/Charts/Echarts/services';
import pieImg from '@/asserts/img/pie.png';
import bgImg from '@/asserts/img/bg.png';

interface BasisPieDatas {
  value: number;
  name: string;
}

interface EchartsTexturePieProps {
  height?: string;
}

const piePatternSrc = pieImg;
const bgPatternSrc = bgImg;

const piePatternImg = new Image();
piePatternImg.src = piePatternSrc;
const bgPatternImg = new Image();
bgPatternImg.src = bgPatternSrc;

const itemStyle = {
  normal: {
    opacity: 0.7,
    color: {
      image: piePatternImg,
      repeat: 'repeat',
    },
    borderWidth: 3,
    borderColor: '#235894',
  },
};
const EchartsTexturePie: React.FC<EchartsTexturePieProps> = (props) => {
  const { height } = props;

  const [echartsTexturePieData, setEchartsTexturePieData] = useState([] as BasisPieDatas[]);

  useEffect(() => {
    queryEchartsTexturePie().then(({ data }) => setEchartsTexturePieData(data || []));
  }, []);

  const getOption = {
    backgroundColor: {
      image: bgPatternImg,
      repeat: 'repeat',
    },
    series: [
      {
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        label: {
          fontSize: 18,
          color: '#235894',
        },
        labelLine: {
          lineStyle: {
            color: '#235894',
          },
        },
        data: echartsTexturePieData,
        itemStyle,
      },
    ],
  };

  return (
    <Skeleton active round loading={echartsTexturePieData?.length === 0}>
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsTexturePie;
