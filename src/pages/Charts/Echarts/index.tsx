import React from 'react';
import { Button, Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import { lines, bars } from './components';

const uri = (
  <a href="https://echarts.apache.org/examples/zh/index.html" target="_blank" rel="noreferrer">
    更多示例
  </a>
);

const Echarts: React.FC = () => {
  return (
    <PageContainer>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <ProCard title="折线图" headerBordered extra={uri}>
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
                  title="堆叠区域折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<lines.EchartsStackedAreaLine />}
                  extra={<Button type="primary">按钮</Button>}
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="阶梯折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<lines.EchartsStepLine />}
                  extra={<Button type="primary">按钮</Button>}
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="极坐标双手数值轴"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<lines.EchartsTwoValueAxesInPolarLine />}
                  extra={<Button type="primary">按钮</Button>}
                />
              </Col>
            </Row>
          </ProCard>
        </Col>

        <Col span={24}>
          <ProCard title="柱状图" headerBordered extra={uri}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <StatisticCard
                  title="基础柱状图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<bars.EchartsBasisBar />}
                  extra={<Button type="primary">按钮</Button>}
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="带背景的柱状图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<bars.EchartsBackgroundBar />}
                  extra={<Button type="primary">按钮</Button>}
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="交互柱状图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<bars.EchartsInteractiveBar />}
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
          <ProCard title="饼图" headerBordered extra={uri}>
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
