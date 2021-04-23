export type modalFormDataType = {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  progress: number;
  status: string;
};

export type modalFormParams = {
  pageSize?: number;
  current?: number;
  keyword?: string;
};

export type modalFormResponse = {
  code: number;
  data: modalFormDataType[];
  msg: string;
};
