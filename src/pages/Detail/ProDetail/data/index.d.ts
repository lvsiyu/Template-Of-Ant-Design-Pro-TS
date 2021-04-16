export type proDetailTitleDataType = {
  title1: string;
  title2: string;
  time: string;
  action: string;
  rangeTime: string;
  description: string;
  rightContent1: string;
  rightContent2: string;
};

export type stepContent = {
  title: string;
  name: string;
  time: string;
  action: string;
};

export type stepDataType = {
  current: number;
  percent?: number;
  status: 'error' | 'success' | 'processing' | 'default' | 'warning' | undefined;
  statusName: string;
  costTime: string;
  people: string;
  stepContent: stepContent[];
};

export type groupDataType = {
  text1: string;
  text2: string;
  text3: string;
  phone: string;
  num1: string;
  num2: string;
  num3: string;
  date: string;
  description: string;
  tip: string;
};

export type proDetailTabDataType = {
  step: stepDataType;
  group: groupDataType;
};

export type detailListDataType = {
  name: string;
  content1: string;
  content2: string;
  content3: string;
};
