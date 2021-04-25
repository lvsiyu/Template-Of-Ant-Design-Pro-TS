import React from 'react';
import type { FormInstance } from 'antd';
import { Button, Space } from 'antd';
import { FooterToolbar } from '@ant-design/pro-layout';
import type { SubmitterProps } from '@ant-design/pro-form/lib/components/Submitter';

interface StepFormFooterProps {
  componentsProps: SubmitterProps & {
    step: number;
    onPre: () => void;
    form?: FormInstance<any> | undefined;
  } & {
    submit: () => void;
    reset: () => void;
  };
}

const StepFormFooter: React.FC<StepFormFooterProps> = (props) => {
  const { componentsProps } = props;
  if (componentsProps.step === 0) {
    return (
      <FooterToolbar>
        <Button type="primary" onClick={() => componentsProps.onSubmit?.()}>
          去第二步 {'>'}
        </Button>
      </FooterToolbar>
    );
  }

  if (componentsProps.step === 1) {
    return (
      <FooterToolbar>
        <Space>
          <Button key="pre" onClick={() => componentsProps.onPre?.()}>
            返回第一步
          </Button>

          <Button type="primary" key="goToTree" onClick={() => componentsProps.onSubmit?.()}>
            去第三步 {'>'}
          </Button>
        </Space>
      </FooterToolbar>
    );
  }

  return (
    <FooterToolbar>
      <Space>
        <Button key="gotoTwo" onClick={() => componentsProps.onPre?.()}>
          {'<'} 返回第二步
        </Button>
        <Button type="primary" key="goToTree" onClick={() => componentsProps.onSubmit?.()}>
          提交 √
        </Button>
      </Space>
    </FooterToolbar>
  );
};

export default StepFormFooter;
