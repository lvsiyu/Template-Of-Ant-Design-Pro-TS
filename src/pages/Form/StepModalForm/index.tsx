import React, { useState } from 'react';
import { Button, Modal, message } from 'antd';
import { StepsForm } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import { stepForm } from './services';
import { Step1, Step2, Step3 } from './components/StepContent';
import StepFormFooter from './components/Footer';
import type { StepFormDataType } from './data';

export default () => {
  const [visible, setVisible] = useState(false);
  const submitStep1 = async (values: StepFormDataType) => {
    let status = false;
    await stepForm(values).then((data) => {
      if (data.code === 200) {
        message.success('提交成功');
        status = true;
      } else {
        message.error('提交失败');
        status = false;
      }
    });
    return status;
  };

  const submitStep2 = async (values: StepFormDataType) => {
    let status = false;
    await stepForm(values).then((data) => {
      if (data.code === 200) {
        message.success('提交成功');
        status = true;
      } else {
        message.error('提交失败');
        status = false;
      }
    });
    return status;
  };
  return (
    <PageContainer>
      <Button type="primary" onClick={() => setVisible(true)}>
        分步表单新建
      </Button>
      <StepsForm
        onFinish={async (values) => {
          stepForm(values).then((data) => {
            if (data.code === 200) {
              message.success('提交成功');
            } else {
              message.error('提交失败');
            }
          });
        }}
        submitter={{
          render: (props) => <StepFormFooter componentsProps={props} />,
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
              {dom}
            </Modal>
          );
        }}
      >
        <StepsForm.StepForm name="base" title="第一步骤" onFinish={(values) => submitStep1(values)}>
          <Step1 />
        </StepsForm.StepForm>
        <StepsForm.StepForm
          name="checkbox"
          title="第二步骤"
          onFinish={(values) => submitStep2(values)}
        >
          <Step2 />
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="第三步骤">
          <Step3 />
        </StepsForm.StepForm>
      </StepsForm>
    </PageContainer>
  );
};
