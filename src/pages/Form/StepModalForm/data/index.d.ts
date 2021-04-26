export type stepModalFormDataType = {
  id?: number;
  name?: string;
  description?: string;
  dateTime?: string;
  progress?: number;
  status?: string;
  type?: string;
};

export type getModalFormListDataType = {
  id: number;
  name: string;
  description: string;
  dateTime: string;
  progress: number;
  status: string;
  type: string;
};

export type stepModalFormParams = {
  pageSize?: number;
  current?: number;
  keyword?: string;
  id?: number;
};

export type stepmModalFormResponse = {
  code: number;
  data: modalFormDataType[];
  msg: string;
};
