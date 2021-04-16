import React, { Fragment } from 'react';
import { RouteContext } from '@ant-design/pro-layout';
import { Steps, Popconfirm, message } from 'antd';
import classNames from 'classnames';
import type { stepDataType, stepContent } from '../../data/index';
import styles from '../../style/index.less';

interface DetailSteps1Props {
  stepData: stepDataType;
}

const { Step } = Steps;

const DetailSteps1: React.FC<DetailSteps1Props> = (props) => {
  const { stepData } = props;
  const confirm = () => {
    message.success('简易操作了一波');
  };

  const cancel = () => {
    message.error('取消操作了一波');
  };

  const description = (value: stepContent, index: number) => {
    return (
      <div
        className={
          stepData?.current === index
            ? styles.stepDescription
            : classNames(styles.textSecondary, styles.stepDescription)
        }
      >
        {value?.name ? <Fragment>{value?.name}</Fragment> : null}
        {value?.time ? <div>{value?.time}</div> : null}
        {value?.action ? (
          <div>
            <Popconfirm
              title="是否确认该操作"
              onConfirm={confirm}
              onCancel={cancel}
              okText="是"
              cancelText="否"
            >
              <a>{value.action}</a>
            </Popconfirm>
          </div>
        ) : null}
      </div>
    );
  };
  return (
    <RouteContext.Consumer>
      {({ isMobile }) => (
        <Steps
          direction={isMobile ? 'vertical' : 'horizontal'}
          current={stepData?.current}
          percent={stepData?.percent}
        >
          {stepData?.stepContent?.length > 0 &&
            stepData?.stepContent?.map((item, index) => (
              <Step
                key={`${index + 1}`}
                title={item.title}
                description={description(item, index)}
              />
            ))}
        </Steps>
      )}
    </RouteContext.Consumer>
  );
};

export default DetailSteps1;
