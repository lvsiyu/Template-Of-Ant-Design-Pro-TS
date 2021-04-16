export type basicGoodsData = {
  id: string;
  name: string;
  barcode: string;
  price: string;
  num: string;
  amount: string;
};

export type basicProgressData = {
  key: string;
  time: string;
  rate: string;
  status: string;
  operator: string;
  cost: string;
};

export type basisDescriptionData1Data = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
};

export type basisDescriptionData2Data = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
};

export type basisDetailDataResponseData = {
  basicGoods: basicGoodsData[];
  basicProgress: basicProgressData[];
  basisDescriptionData1: basisDescriptionData1Data;
  basisDescriptionData2: basisDescriptionData2Data;
};

export type basisDetailDataResponse = {
  code: number;
  data: {
    basicGoods: basicGoodsData[];
    basicProgress: basicProgressData[];
    basisDescriptionData1: basisDescriptionData1Data;
    basisDescriptionData2: basisDescriptionData2Data;
  };
  msg: string;
};
