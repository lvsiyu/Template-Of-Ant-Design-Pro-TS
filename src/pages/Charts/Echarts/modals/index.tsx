import React from 'react';
import { Modal } from 'antd';
import { lines } from '@/pages/Charts/Echarts/components';

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
        <lines.EchartsBasisLine height={modalHeight} />
      ) : null}
    </Modal>
  );
};

export default EchartsModals;
