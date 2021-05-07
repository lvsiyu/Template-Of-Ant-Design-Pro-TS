import React from 'react';
import { Modal } from 'antd';
import { lines, bars, pies, scatters } from '@/pages/Charts/Echarts/components';

interface EchartsProps {
  handleOk: () => void;
  handleCancel: () => void;
  visible: boolean;
  modalType: string;
  modalTitle: string;
  modalHeight: string;
  modalRediusData: number[];
  modalPosition: string[];
}

const EchartsModals: React.FC<EchartsProps> = (props) => {
  const {
    handleOk,
    handleCancel,
    visible,
    modalType,
    modalTitle,
    modalHeight,
    modalRediusData,
    modalPosition,
  } = props;
  return (
    <Modal
      title={modalTitle}
      destroyOnClose
      centered
      width={1000}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {modalType && modalType === 'EchartsBasisLine' ? (
        <lines.EchartsBasisLine height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsAreaLine' ? (
        <lines.EchartsAreaLine height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsSmoothLine' ? (
        <lines.EchartsSmoothLine height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsStackedAreaLine' ? (
        <lines.EchartsStackedAreaLine height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsStepLine' ? (
        <lines.EchartsStepLine height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsTwoValueAxesInPolarLine' ? (
        <lines.EchartsTwoValueAxesInPolarLine height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsBasisBar' ? (
        <bars.EchartsBasisBar height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsBackgroundBar' ? (
        <bars.EchartsBackgroundBar height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsInteractiveBar' ? (
        <bars.EchartsInteractiveBar height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsRotationLabelBar' ? (
        <bars.EchartsRotationLabelBar height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsStackedBar' ? (
        <bars.EchartsStackedBar height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsRoundedBar' ? (
        <bars.EchartsRoundedBar height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsBasisPie' ? (
        <pies.EchartsBasisPie height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsRingPie' ? (
        <pies.EchartsRingPie height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsTexturePie' ? (
        <pies.EchartsTexturePie height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsRosePie' ? (
        <pies.EchartsRosePie
          height={modalHeight}
          radiusData={modalRediusData}
          position={modalPosition}
        />
      ) : null}
      {modalType && modalType === 'EchartsSpeicalLabelPie' ? (
        <pies.EchartsSpeicalLabelPie height={modalHeight} position={modalPosition} />
      ) : null}
      {modalType && modalType === 'EchartsNestedPie' ? (
        <pies.EchartsNestedPie height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsBasisScatter' ? (
        <scatters.EchartsBasisScatter height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsAnimateScatter' ? (
        <scatters.EchartsAnimateScatter height={modalHeight} />
      ) : null}
      {modalType && modalType === 'EchartsStaggeredScatter' ? (
        <scatters.EchartsStaggeredScatter height={modalHeight} />
      ) : null}
    </Modal>
  );
};

export default EchartsModals;
