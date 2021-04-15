import React from 'react';
import { Modal } from 'antd';
import { Lines, Columns, Pies, Bars, Radars, Words } from '@/pages/Charts/AntdCharts/components';

interface AntdChartsProps {
  handleOk: () => void;
  handleCancel: () => void;
  visible: boolean;
  modalTitle: string;
  modalType: string;
  modalHeight: number;
}

const AntdChartsModals: React.FC<AntdChartsProps> = (props) => {
  const { handleOk, handleCancel, visible, modalTitle, modalType, modalHeight } = props;
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
      {modalType && modalType === 'BasisLine' ? <Lines.BasisLine height={modalHeight} /> : null}
      {modalType && modalType === 'BasisColumn' ? (
        <Columns.BasisColumn height={modalHeight} />
      ) : null}
      {modalType && modalType === 'BasisPie' ? <Pies.BasisPie height={modalHeight} /> : null}
      {modalType && modalType === 'BasisBar' ? <Bars.BasisBar height={modalHeight} /> : null}
      {modalType && modalType === 'BasisRadar' ? <Radars.BasisRadar height={modalHeight} /> : null}
      {modalType && modalType === 'BasisWord' ? <Words.BasisWord height={modalHeight} /> : null}
    </Modal>
  );
};

export default AntdChartsModals;
