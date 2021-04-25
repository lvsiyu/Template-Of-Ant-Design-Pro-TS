export type modalFormDataType = {
  id: number;
  name: string;
  description: string;
  dateTime: string;
  progress: number;
  status: string;
};

export type modalFormParams = {
  pageSize?: number;
  current?: number;
  keyword?: string;
  id?: number;
};

export type modalFormResponse = {
  code: number;
  data: modalFormDataType[];
  msg: string;
};
