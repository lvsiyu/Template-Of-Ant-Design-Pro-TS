import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { StatisticCard } from '@ant-design/pro-card';
import { Lines, Columns, Pies, Bars, Radars, Words } from './components';
import AntdChartsModals from '@/pages/Charts/AntdCharts/modals';

const AntdCharts: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalHeight, setModalHeight] = useState(0);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = (type: string, title: string, height: number) => {
    setModalType(type);
    setModalTitle(title);
    setModalHeight(height);
    setIsModalVisible(true);
  };

  const ModalAction = {
    handleOk,
    handleCancel,
    visible: isModalVisible,
    modalType,
    modalTitle,
    modalHeight,
  };

  return (
    <PageContainer>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <StatisticCard
            title="基础折线图"
            tip="说明说明"
            headerBordered
            /* 由于antdcharts的loading蒙版使用的是绝对定位，所以防止loading超出范围 */
            style={{ height: '600px', position: 'relative', overflow: 'hidden' }}
            chart={<Lines.BasisLine height={461} />}
            extra={
              <Button onClick={() => showModal('BasisLine', '基础折线图', 500)} type="primary">
                弹框显示
              </Button>
            }
          />
        </Col>
        <Col span={8}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <StatisticCard
                title="基础柱状图"
                tip="说明说明"
                headerBordered
                style={{ height: '292px', position: 'relative', overflow: 'hidden' }}
                chart={<Columns.BasisColumn /* height={180} */ />}
                extra={
                  <Button
                    onClick={() => showModal('BasisColumn', '基础柱状图', 500)}
                    type="primary"
                  >
                    弹框显示
                  </Button>
                }
              />
            </Col>
            <Col span={24}>
              <StatisticCard
                title="基础饼图"
                tip="说明说明"
                headerBordered
                style={{ height: '292px', position: 'relative', overflow: 'hidden' }}
                chart={<Pies.BasisPie />}
                extra={
                  <Button onClick={() => showModal('BasisPie', '基础饼图', 500)} type="primary">
                    弹框显示
                  </Button>
                }
              />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <StatisticCard
            title="基础条形图"
            tip="说明说明"
            headerBordered
            style={{ height: '300px', position: 'relative', overflow: 'hidden' }}
            chart={<Bars.BasisBar />}
            extra={
              <Button onClick={() => showModal('BasisBar', '基础条形图', 500)} type="primary">
                弹框显示
              </Button>
            }
          />
        </Col>
        <Col span={6}>
          <StatisticCard
            title="基础雷达图"
            tip="说明说明"
            headerBordered
            style={{ height: '300px', position: 'relative', overflow: 'hidden' }}
            chart={<Radars.BasisRadar />}
            extra={
              <Button onClick={() => showModal('BasisRadar', '基础雷达图', 500)} type="primary">
                弹框显示
              </Button>
            }
          />
        </Col>
        <Col span={6}>
          <StatisticCard
            title="基础词云图"
            tip="说明说明"
            headerBordered
            style={{ height: '300px', position: 'relative', overflow: 'hidden' }}
            chart={<Words.BasisWord />}
            extra={
              <Button onClick={() => showModal('BasisWord', '基础词云图', 500)} type="primary">
                弹框显示
              </Button>
            }
          />
        </Col>
      </Row>

      <AntdChartsModals {...ModalAction} />
    </PageContainer>
  );
};

export default AntdCharts;
