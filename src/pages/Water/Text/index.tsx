import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { WaterMark } from '@ant-design/pro-layout';
import styles from './index.less';

const TextWaterWave: React.FC = () => {
  return (
    <PageContainer>
      <WaterMark content="我是文字水印">
        <ProCard style={{ height: '500px' }} title="普通水印" headerBordered></ProCard>
      </WaterMark>

      <WaterMark content="我是文字水印" fontColor="blue" offsetTop={210}>
        <ProCard title="纸张褶皱效果下的文字水印" headerBordered style={{ marginTop: '1rem' }}>
          <div className={styles.svgBox}>
            <div className={styles.svgContent}></div>
            <svg>
              <filter id="roughpaper">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.04"
                  result="noise"
                  numOctaves="5"
                />

                <feDiffuseLighting in="noise" lighting-color="#fff" surfaceScale="2">
                  <feDistantLight azimuth="45" elevation="60" />
                </feDiffuseLighting>
              </filter>
            </svg>
          </div>
        </ProCard>
      </WaterMark>
    </PageContainer>
  );
};

export default TextWaterWave;
