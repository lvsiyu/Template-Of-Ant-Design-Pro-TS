import React from 'react';
import { message } from 'antd';
import { StepsForm } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { stepForm } from './services';
import { Step1, Step2, Step3 } from './components/StepContent';
import StepFormFooter from './components/Footer';
import type { StepFormDataType } from './data';

const StepFormList: React.FC = () => {
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
      <ProCard>
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
        >
          <StepsForm.StepForm
            name="base"
            title="第一步骤"
            onFinish={(values) => submitStep1(values)}
          >
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
      </ProCard>
    </PageContainer>
  );
};

export default StepFormList;
