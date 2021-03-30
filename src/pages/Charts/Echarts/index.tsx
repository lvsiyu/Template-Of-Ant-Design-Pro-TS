import React from 'react';
import { Button, Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import { lines } from './components';

const Echarts: React.FC = () => {
  return (
    <PageContainer>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <ProCard title="折线图" headerBordered>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <StatisticCard
                  title="基础折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<lines.EchartsBasisLine />}
                  extra={<Button type="primary">按钮</Button>}
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="面积折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<lines.EchartsAreaLine />}
                  extra={<Button type="primary">按钮</Button>}
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="平滑折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<lines.EchartsSmoothLine />}
                  extra={<Button type="primary">按钮</Button>}
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="基础折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  extra={<Button type="primary">按钮</Button>}
                >
                  111
                </StatisticCard>
              </Col>
            </Row>
          </ProCard>
        </Col>
        <Col span={24}>
          <ProCard title="饼图" headerBordered>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <StatisticCard
                  title="基础折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  extra={<Button type="primary">按钮</Button>}
                >
                  111
                </StatisticCard>
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="基础折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  extra={<Button type="primary">按钮</Button>}
                >
                  111
                </StatisticCard>
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="基础折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  extra={<Button type="primary">按钮</Button>}
                >
                  111
                </StatisticCard>
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="基础折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  extra={<Button type="primary">按钮</Button>}
                >
                  111
                </StatisticCard>
              </Col>
            </Row>
          </ProCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Echarts;
