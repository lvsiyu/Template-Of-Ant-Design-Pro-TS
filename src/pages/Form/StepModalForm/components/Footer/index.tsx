import React from 'react';
import type { FormInstance } from 'antd';
import { Button, Space } from 'antd';
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
  loadingStatus?: boolean;
  current: (index: number) => void;
}

const StepFormFooter: React.FC<StepFormFooterProps> = (props) => {
  const { componentsProps, loadingStatus, current } = props;
  if (componentsProps.step === 0) {
    return (
      <Button loading={loadingStatus} type="primary" onClick={() => componentsProps.onSubmit?.()}>
        去第二步 {'>'}
      </Button>
    );
  }

  if (componentsProps.step === 1) {
    return (
      <Space>
        <Button loading={loadingStatus} key="pre" onClick={() => current(0)}>
          返回第一步
        </Button>

        <Button
          loading={loadingStatus}
          type="primary"
          key="goToTree"
          onClick={() => componentsProps.onSubmit?.()}
        >
          去第三步 {'>'}
        </Button>
      </Space>
    );
  }

  return (
    <Space>
      <Button loading={loadingStatus} key="gotoTwo" onClick={() => current(1)}>
        {'<'} 返回第二步
      </Button>
      <Button
        loading={loadingStatus}
        type="primary"
        key="goToTree"
        onClick={() => componentsProps.onSubmit?.()}
      >
        提交 √
      </Button>
    </Space>
  );
};

export default StepFormFooter;
