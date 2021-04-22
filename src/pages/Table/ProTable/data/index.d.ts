export type ProTableDataType = {
  key: number;
  startTime: string;
  endTime: string;
  status: string;
  progress: number;
};

export type ProTableDataParams = {
  pageSize?: number;
  current?: number;
};

export type ProTableDataResponse = {
  code: number;
  data: ProTableDataType[];
  msg: string;
};
