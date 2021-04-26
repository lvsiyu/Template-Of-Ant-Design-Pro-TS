import type { Dispatch, SetStateAction } from 'react';
import React, { useState } from 'react';
import { Modal, Spin, message } from 'antd';
import moment from 'moment';
import { StepsForm } from '@ant-design/pro-form';
import { uploadStepModalFormList } from '../../services';
import { Step1, Step2, Step3 } from '../../components/StepContent';
import StepFormFooter from '../../components/Footer';
import type { stepModalFormDataType } from '../../data';

interface CreateStepModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  refresh: () => void;
  detail: stepModalFormDataType;
  currentNum: number;
  current: (index: number) => void;
}

const EditStepModal: React.FC<CreateStepModalProps> = (props) => {
  const { visible, setVisible, refresh, detail, currentNum, current } = props;
  const [loadingStatus, setLoadingStatus] = useState(false);

  const submitStep1 = async (values: stepModalFormDataType) => {
    setLoadingStatus(true);
    await uploadStepModalFormList({ ...values, id: detail.id }).then((data) => {
      if (data.code === 200) {
        message.success('提交成功');
        setLoadingStatus(false);
        current(1);
      } else {
        message.error('提交失败');
        setLoadingStatus(false);
        current(0);
      }
    });
  };

  const submitStep2 = async (values: stepModalFormDataType) => {
    setLoadingStatus(true);
    await uploadStepModalFormList({ ...values, id: detail.id }).then((data) => {
      if (data.code === 200) {
        message.success('提交成功');
        setLoadingStatus(false);
        current(2);
      } else {
        message.error('提交失败');
        setLoadingStatus(false);
        current(1);
      }
    });
  };
  return Object.keys(detail).length === 0 ? null : (
    <StepsForm
      onFinish={async (values) => {
        setLoadingStatus(true);
        uploadStepModalFormList({ ...values, id: detail.id }).then((data) => {
          if (data.code === 200) {
            message.success('提交成功');
            setVisible(false);
            refresh();
            setLoadingStatus(false);
          } else {
            message.error('提交失败');
            setLoadingStatus(false);
          }
        });
      }}
      current={currentNum}
      submitter={{
        render: (footerProps) => (
          <StepFormFooter
            loadingStatus={loadingStatus}
            componentsProps={footerProps}
            current={current}
          />
        ),
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            title="分步表单"
            width={800}
            onCancel={() => setVisible(false)}
            visible={visible}
            footer={submitter}
            destroyOnClose
          >
            <Spin spinning={loadingStatus}>{dom}</Spin>
          </Modal>
        );
      }}
    >
      <StepsForm.StepForm
        name="base"
        title="第一步:基本信息"
        onFinish={(values) => submitStep1(values)}
        initialValues={{
          name: detail.name,
          dateTime: moment(detail.dateTime),
          description: detail.description,
        }}
      >
        <Step1 />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        name="checkbox"
        title="第二步:状态填写"
        onFinish={(values) => submitStep2(values)}
        initialValues={{
          status: detail.status,
        }}
      >
        <Step2 />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        name="time"
        title="第三步:进度填写"
        initialValues={{
          progress: detail.progress,
        }}
      >
        <Step3 />
      </StepsForm.StepForm>
    </StepsForm>
  );
};
export default EditStepModal;
