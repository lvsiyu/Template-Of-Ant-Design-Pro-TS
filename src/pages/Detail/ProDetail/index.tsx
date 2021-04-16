import React, { useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProSkeleton from '@ant-design/pro-skeleton';
import { Skeleton } from 'antd';
import {
  ProDetailHeaderExtra,
  ProDetailHeaderDescription,
  ProDetailHeaderAction,
  DetailTabs1,
  DetailTabs2,
} from './components/index';
import { queryProDetailTitle, queryProDetailTab1, queryProDetailTab2 } from './services/index';
import type { proDetailTitleDataType, proDetailTabDataType } from './data/index';
import styles from './style/index.less';

const ProDetail: React.FC = () => {
  const [tabActiveKey, setTabActiveKey] = useState('tabs1');
  const [proDetailTitleData, setProDetailTitleData] = useState({} as proDetailTitleDataType);
  const [proDetailTab1Data, setProDetailTab1Data] = useState({} as proDetailTabDataType | null);
  const [proDetailTab2Data, setProDetailTab2Data] = useState({} as proDetailTabDataType | null);

  useEffect(() => {
    queryProDetailTitle().then(({ data }) => setProDetailTitleData(data || {}));
    queryProDetailTab1().then(({ data }) => setProDetailTab1Data(data || {}));
    setProDetailTab2Data(null);
  }, []);

  const onChangeTabs = async (value: string) => {
    setTabActiveKey(value);
    switch (value) {
      case 'tabs1':
        queryProDetailTab1().then(({ data }) => setProDetailTab1Data(data || {}));
        setProDetailTab2Data(null);
        break;
      case 'tabs2':
        queryProDetailTab2().then(({ data }) => setProDetailTab2Data(data || {}));
        setProDetailTab1Data(null);
        break;
      default:
        break;
    }
  };

  const showTabContent = (key: string) => {
    let tabContent = <ProSkeleton type="descriptions" pageHeader={false} />;
    if (key === 'tabs1' && proDetailTab1Data) {
      tabContent = <DetailTabs1 data={proDetailTab1Data} />;
    }
    if (key === 'tabs2' && proDetailTab2Data) {
      tabContent = <DetailTabs2 data={proDetailTab2Data} />;
    }

    return tabContent;
  };
  return (
    <PageContainer
      extra={
        Object.keys(proDetailTitleData).length > 0 ? (
          ProDetailHeaderAction()
        ) : (
          <Skeleton title={false} active paragraph={{ rows: 2, width: '100%' }} />
        )
      }
      content={
        Object.keys(proDetailTitleData).length > 0 ? (
          ProDetailHeaderDescription(proDetailTitleData)
        ) : (
          <Skeleton title={false} active paragraph={{ rows: 2, width: '100%' }} />
        )
      }
      extraContent={
        Object.keys(proDetailTitleData).length > 0 ? (
          ProDetailHeaderExtra(proDetailTitleData)
        ) : (
          <Skeleton title={false} active paragraph={{ rows: 2, width: '100%' }} />
        )
      }
      className={styles.pageHeader}
      tabActiveKey={tabActiveKey}
      onTabChange={(value) => onChangeTabs(value)}
      tabList={[
        { key: 'tabs1', tab: '选项卡1' },
        { key: 'tabs2', tab: '选项卡2' },
      ]}
    >
      {Object.keys(proDetailTitleData).length > 0 && showTabContent(tabActiveKey)}
    </PageContainer>
  );
};

export default ProDetail;
