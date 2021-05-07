import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import { lines, bars, pies, scatters } from './components';
import EchartsModals from '@/pages/Charts/Echarts/modals';

const uri = (
  <a href="https://echarts.apache.org/examples/zh/index.html" target="_blank" rel="noreferrer">
    更多示例
  </a>
);

const Echarts: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalHeight, setModalHeight] = useState('300px');
  const [modalRediusData, setModalRediusData] = useState([20, 100]);
  const [modalPosition, setModalPosition] = useState(['35%', '50%']);

  const showModal = (
    type: string,
    title: string,
    height: string,
    rediusData?: number[],
    position?: string[],
  ) => {
    setModalType(type);
    setModalTitle(title);
    setModalHeight(height);
    setIsModalVisible(true);
    if (rediusData) {
      setModalRediusData(rediusData);
    }
    if (position) {
      setModalPosition(position);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const ModalAction = {
    handleOk,
    handleCancel,
    modalType,
    modalTitle,
    modalHeight,
    modalRediusData,
    modalPosition,
    visible: isModalVisible,
  };

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
                  extra={
                    <Button
                      onClick={() => showModal('EchartsBasisLine', '基础折线图', '500px')}
                      type="primary"
                    >
                      弹框显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="面积折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<lines.EchartsAreaLine />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsAreaLine', '面积折线图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="平滑折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<lines.EchartsSmoothLine />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsSmoothLine', '平滑折线图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="堆叠区域折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<lines.EchartsStackedAreaLine />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsStackedAreaLine', '堆叠区域折线图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="阶梯折线图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<lines.EchartsStepLine />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsStepLine', '阶梯折线图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="极坐标双手数值轴"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<lines.EchartsTwoValueAxesInPolarLine />}
                  extra={
                    <Button
                      onClick={() =>
                        showModal('EchartsTwoValueAxesInPolarLine', '极坐标双手数值轴', '500px')
                      }
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
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
                  extra={
                    <Button
                      onClick={() => showModal('EchartsBasisBar', '基础柱状图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="带背景的柱状图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<bars.EchartsBackgroundBar />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsBackgroundBar', '带背景的柱状图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="交互柱状图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<bars.EchartsInteractiveBar />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsInteractiveBar', '交互柱状图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="旋转标签柱状图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<bars.EchartsRotationLabelBar />}
                  extra={
                    <Button
                      onClick={() =>
                        showModal('EchartsRotationLabelBar', '旋转标签柱状图', '500px')
                      }
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="堆叠柱状图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<bars.EchartsStackedBar />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsStackedBar', '堆叠柱状图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="圆环柱状图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<bars.EchartsRoundedBar />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsRoundedBar', '圆环柱状图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
            </Row>
          </ProCard>
        </Col>

        <Col span={24}>
          <ProCard title="饼图" headerBordered extra={uri}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <StatisticCard
                  title="基础饼图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<pies.EchartsBasisPie />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsBasisPie', '基础饼图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="圆环图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<pies.EchartsRingPie />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsRingPie', '圆环图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="纹理饼图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<pies.EchartsTexturePie />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsTexturePie', '纹理饼图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="南丁格尔玫瑰图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<pies.EchartsRosePie />}
                  extra={
                    <Button
                      onClick={() =>
                        showModal(
                          'EchartsRosePie',
                          '南丁格尔玫瑰图',
                          '500px',
                          [50, 200],
                          ['45%', '50%'],
                        )
                      }
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="自定义标签"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<pies.EchartsSpeicalLabelPie />}
                  extra={
                    <Button
                      onClick={() =>
                        showModal('EchartsSpeicalLabelPie', '自定义标签', '500px', undefined, [
                          '50%',
                          '50%',
                        ])
                      }
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
              <Col span={8}>
                <StatisticCard
                  title="嵌套饼图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<pies.EchartsNestedPie />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsNestedPie', '嵌套饼图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
            </Row>
          </ProCard>
        </Col>

        <Col span={24}>
          <ProCard title="散点图" headerBordered extra={uri}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <StatisticCard
                  title="基础散点图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<scatters.EchartsBasisScatter />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsBasisScatter', '基础散点图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>

              <Col span={8}>
                <StatisticCard
                  title="动效散点图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<scatters.EchartsAnimateScatter />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsAnimateScatter', '动效散点图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>

              <Col span={8}>
                <StatisticCard
                  title="交错散点图"
                  tip="说明说明"
                  headerBordered
                  bordered
                  chart={<scatters.EchartsStaggeredScatter />}
                  extra={
                    <Button
                      onClick={() => showModal('EchartsStaggeredScatter', '交错散点图', '500px')}
                      type="primary"
                    >
                      弹窗显示
                    </Button>
                  }
                />
              </Col>
            </Row>
          </ProCard>
        </Col>
      </Row>

      <EchartsModals {...ModalAction} />
    </PageContainer>
  );
};

export default Echarts;
