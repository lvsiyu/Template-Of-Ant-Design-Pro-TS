import React from 'react';
import { Modal } from 'antd';
import { lines, bars, pies } from '@/pages/Charts/Echarts/components';

interface EchartsProps {
  handleOk: () => void;
  handleCancel: () => void;
  visible: boolean;
  modalType: string;
  modalTitle: string;
  modalHeight: string;
}

const EchartsModals: React.FC<EchartsProps> = (props) => {
  const { handleOk, handleCancel, visible, modalType, modalTitle, modalHeight } = props;
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
    </Modal>
  );
};

export default EchartsModals;
