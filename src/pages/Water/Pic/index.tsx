import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { WaterMark } from '@ant-design/pro-layout';
import logo from '@/asserts/img/cool.png';

const PicWaterWave: React.FC = () => {
  return (
    <PageContainer>
      <WaterMark width={50} height={50} image={logo}>
        <ProCard style={{ height: '500px' }}></ProCard>
      </WaterMark>
    </PageContainer>
  );
};

export default PicWaterWave;
