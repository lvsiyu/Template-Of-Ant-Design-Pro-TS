export type DataSourceType = {
  id: number;
  title?: string;
  labels?: {
    key: string;
    label: string;
  }[];
  state?: string;
  created_at?: string;
  children?: DataSourceType[];
};

export type tagValueDataType = {
  key: string;
  label: string;
};

export type TagListDataType = {
  value?: tagValueDataType[];
  onChange?: (
    value: {
      key: string;
      label: string;
    }[],
  ) => void;
};

export type EditTableDataParams = {
  pageSize?: number;
  current?: number;
  keyword?: string;
};

export type EditTableDataResponse = {
  code: number;
  data: DataSourceType[];
  msg: string;
};
