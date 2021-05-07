import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { queryStaggeredAnimateScatter } from '@/pages/Charts/Echarts/services';

interface StaggeredScatterDatas {
  height?: string;
  male?: [];
  female?: [];
}

const EchartsStaggeredScatter: React.FC<StaggeredScatterDatas> = (props) => {
  const { height } = props;

  const [echartsStaggeredScatterData, setEchartsStaggeredScatterData] = useState(
    {} as StaggeredScatterDatas,
  );

  useEffect(() => {
    queryStaggeredAnimateScatter().then(({ data }) => setEchartsStaggeredScatterData(data || []));
  }, []);

  const getOption = {
    tooltip: {
      // trigger: 'axis',
      showDelay: 0,
      formatter(params: { value: string | any[]; seriesName: string; name: string }) {
        if (params.value.length > 1) {
          return `${params.seriesName} :<br/>${params.value[0]}cm ${params.value[1]}kg `;
        }
        return `${params.seriesName} :<br/>${params.name} : ${params.value}kg `;
      },
      axisPointer: {
        show: true,
        type: 'cross',
        lineStyle: {
          type: 'dashed',
          width: 1,
        },
      },
    },

    brush: {},
    legend: {
      data: ['Female', 'Male'],
      left: 'center',
      bottom: 10,
    },
    xAxis: [
      {
        type: 'value',
        scale: true,
        axisLabel: {
          formatter: '{value} cm',
        },
        splitLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        axisLabel: {
          formatter: '{value} kg',
        },
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: 'Female',
        type: 'scatter',
        emphasis: {
          focus: 'series',
        },
        data: echartsStaggeredScatterData.female,
        markArea: {
          silent: true,
          itemStyle: {
            color: 'transparent',
            borderWidth: 1,
            borderType: 'dashed',
          },
          data: [
            [
              {
                name: 'Female Data Range',
                xAxis: 'min',
                yAxis: 'min',
              },
              {
                xAxis: 'max',
                yAxis: 'max',
              },
            ],
          ],
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
        markLine: {
          lineStyle: {
            type: 'solid',
          },
          data: [{ type: 'average', name: '平均值' }, { xAxis: 160 }],
        },
      },
      {
        name: 'Male',
        type: 'scatter',
        emphasis: {
          focus: 'series',
        },
        data: echartsStaggeredScatterData.male,
        markArea: {
          silent: true,
          itemStyle: {
            color: 'transparent',
            borderWidth: 1,
            borderType: 'dashed',
          },
          data: [
            [
              {
                name: 'Male Data Range',
                xAxis: 'min',
                yAxis: 'min',
              },
              {
                xAxis: 'max',
                yAxis: 'max',
              },
            ],
          ],
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' },
          ],
        },
        markLine: {
          lineStyle: {
            type: 'solid',
          },
          data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }],
        },
      },
    ],
  };

  return (
    <Skeleton
      active
      round
      loading={echartsStaggeredScatterData && Object.keys(echartsStaggeredScatterData).length === 0}
    >
      <ReactEcharts option={getOption} style={{ width: '100%', height: height || '300px' }} />
    </Skeleton>
  );
};

export default EchartsStaggeredScatter;
