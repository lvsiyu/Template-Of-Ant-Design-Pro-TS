import React, { Fragment, useState, useEffect } from 'react';
import { Card, Divider } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProSkeleton from '@ant-design/pro-skeleton';
import { BasisDetail1, BasisDetail2, DetailList1, DetailList2 } from './components/index';
import { queryDetailData } from './services';
import type { basisDetailDataResponseData } from './data/index';
import styles from './style/index.less';

const BasisDetail: React.FC = () => {
  const [basisDetailData, setBasisDetailData] = useState({} as basisDetailDataResponseData);

  useEffect(() => {
    queryDetailData().then(({ data }) => setBasisDetailData(data || {}));
  }, []);

  return (
    <PageContainer>
      <Card bordered={false}>
        {Object.keys(basisDetailData).length > 0 ? (
          <Fragment>
            <BasisDetail1
              data={basisDetailData?.basisDescriptionData1}
              loading={
                basisDetailData?.basisDescriptionData1 &&
                Object.keys(basisDetailData.basisDescriptionData1).length === 0
              }
            />
            <Divider style={{ marginBottom: 32 }} />
            <BasisDetail2
              data={basisDetailData?.basisDescriptionData2}
              loading={
                basisDetailData?.basisDescriptionData2 &&
                Object.keys(basisDetailData.basisDescriptionData2).length === 0
              }
            />
            <Divider style={{ marginBottom: 32 }} />
            <div className={styles.title}>详情列表1</div>
            <DetailList1
              basicGoods={basisDetailData?.basicGoods}
              loading={basisDetailData?.basicGoods?.length === 0}
            />
            <div className={styles.title}>详情列表2</div>
            <DetailList2
              basicProgress={basisDetailData?.basicProgress}
              loading={basisDetailData?.basicProgress?.length === 0}
            />
          </Fragment>
        ) : (
          <ProSkeleton type="descriptions" pageHeader={false} />
        )}
      </Card>
    </PageContainer>
  );
};

export default BasisDetail;
