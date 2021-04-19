export type BasisListDataType = {
  title: string;
  avatar: string;
};

export type BasisListDataResponse = {
  code: number;
  data: BasisListDataType[];
  msg: string;
};
