export type BasisTableDataType = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  progress: number;
  status: string;
};

export type BasisTableDataParams = {
  pageSize?: number;
  current?: number;
  keyword?: string;
};

export type BasisTableInnerDataType = {
  id: number;
  name: string;
  description: string;
  url: string;
};
