import React from 'react';
import { Modal } from 'antd';

interface BasisModalProps {
  visible: boolean;
  hideModal: () => void;
  handleOk: () => void;
}

const BasisModal: React.FC<BasisModalProps> = (props) => {
  const { visible, hideModal, handleOk } = props;

  return (
    <Modal title="默认弹出框" visible={visible} onOk={handleOk} onCancel={hideModal} centered>
      <p>内容...内容...</p>
      <p>内容...内容...</p>
      <p>内容...内容...</p>
    </Modal>
  );
};

export default BasisModal;
