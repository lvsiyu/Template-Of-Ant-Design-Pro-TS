import React from 'react';
import { Button, Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { StatisticCard } from '@ant-design/pro-card';
import { Lines, Columns, Pies, Bars, Radars, Words } from './components';

const BizCharts: React.FC = () => {
  return (
    <PageContainer>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <StatisticCard
            title="基础折线图"
            tip="说明说明"
            headerBordered
            style={{ height: '700' }}
            chart={<Lines.BasisLine height={461} />}
            extra={<Button type="primary">按钮</Button>}
          />
        </Col>
        <Col span={8}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <StatisticCard
                title="柱状图"
                tip="说明说明"
                headerBordered
                style={{ height: '287px' }}
                chart={<Columns.BasisColumn height={180} />}
                extra={<Button type="primary">按钮</Button>}
              />
            </Col>
            <Col span={24}>
              <StatisticCard
                title="饼图"
                tip="说明说明"
                headerBordered
                style={{ height: '287px' }}
                chart={<Pies.BasisPie height={180} />}
                extra={<Button type="primary">按钮</Button>}
              />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <StatisticCard
            title="条形图"
            tip="说明说明"
            headerBordered
            style={{ height: '300px' }}
            chart={<Bars.BasisColumn height={200} />}
            extra={<Button type="primary">按钮</Button>}
          />
        </Col>
        <Col span={6}>
          <StatisticCard
            title="雷达图"
            tip="说明说明"
            headerBordered
            style={{ height: '300px' }}
            chart={<Radars.BasisRadar height={200} />}
            extra={<Button type="primary">按钮</Button>}
          />
        </Col>
        <Col span={6}>
          <StatisticCard
            title="词云图"
            tip="说明说明"
            headerBordered
            style={{ height: '300px' }}
            chart={<Words.WordCloudChart height={200} />}
            extra={<Button type="primary">按钮</Button>}
          />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default BizCharts;
